import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { generateClient } from "aws-amplify/data";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Schema } from "../amplify/data/resource";
import IncidentsList from "../components/IncidentsList";
import NoIncidents from "../components/NoIncidents";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    lockIcon: {
        color: "#FFFFFF",
    },
    card: {
        width:"100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 18,
    },
    cardContent: {
        flex: 1,
    },
    categoryText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    addressText: {
        fontSize: 15,
        color: "#333333",
    },
    timestampText: {
        fontSize: 12,
        color: "#777777",
    },
    floatingButton: {
        backgroundColor: "#C5050C",
        borderRadius: 50,
        padding: 20,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOpacity: 0.8,
        shadowRadius: 8 ,
        shadowOffset : { width: 1, height: 13},
    },
    floatingButtonIcon: {
        color: "#FFFFFF",
    },
});

const CLIENT = generateClient<Schema>();
type Incident = Schema['Incident']['type'];

export default function DashboardScreen() {
    const navigation = useNavigation<any>();
    const [incidents, setIncidents] = useState<Incident[]>([]);

    useEffect(() => {
        const sub = CLIENT.models.Incident.observeQuery().subscribe({
            next: ({items, isSynced}) => {
                setIncidents([...items].reverse())
            },
        });
        return () => sub.unsubscribe();
    }, []);

    return (
        <View style={Styles.container}>
            { incidents.length > 0 ? <IncidentsList incidents={incidents}/> : <NoIncidents/> }
            <View style={{
                width: "100%",
                alignItems: "center",
                paddingBottom: 40,
                paddingTop: 20,
                borderStyle: "solid",
                borderTopWidth: 5,
                borderColor: "#C5050C",
            }}>
                <Pressable
                    style={Styles.floatingButton}
                    onPress={() => {
                        navigation.navigate("Report");
                    }}
                >
                    <MaterialIcons name="campaign" size={50} style={Styles.floatingButtonIcon} />
                </Pressable>
            </View>
        </View>
    );
}
