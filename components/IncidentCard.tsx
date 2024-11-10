import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const STYLES = StyleSheet.create({
    container: {
        width: '90%',
        rowGap: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset : { width: 5, height: 5},
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 'normal',
    }
});

const CLIENT = generateClient<Schema>();

type Incident = Schema['Incident']['type'];

interface IncidentCardProps {
    incident: Incident;
}

export default function IncidentCard({incident}: IncidentCardProps) {
    const AUTH = useAuthenticator();
    const IS_CREATOR = AUTH.user.userId === incident.reporterID;
    const PRETTY_TIMESTAMP = new Date(incident.timestamp).toLocaleString();
    const PRETTY_LOCATION = `${incident.location.latitude}, ${incident.location.longitude}`;

    const handleDeletion = async () => {
        try {
            await CLIENT.models.Incident.delete({ id: incident.id });
        } catch (error) {
            console.error('Failed to delete incident:', error);
        }
    };

    return (
        <View style={STYLES.container}>
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
                <View style={{ flexDirection:'row', columnGap:10, alignItems:'center'}}>
                    <MaterialIcons name="campaign" size={32} color="#b71c1c" />
                    <View>
                        <Text style={STYLES.title}>{incident.category}</Text>
                        {incident.subcategory && <Text style={STYLES.subtitle}>({incident.subcategory})</Text>}
                    </View>
                </View>
                {IS_CREATOR && (
                    <Pressable onPress={handleDeletion}>
                        <MaterialIcons name="delete" size={32} color="#b71c1c" />
                    </Pressable>
                )}
            </View>
            <View>
                
                
                <View style={{
                    rowGap: 5,
                }}>
                    <Text style={STYLES.subtitle}>Report Location: {PRETTY_LOCATION}</Text>
                    <Text style={STYLES.subtitle}>Report Time: {PRETTY_TIMESTAMP}</Text>
                </View>
            </View>
        </View>
    );

}