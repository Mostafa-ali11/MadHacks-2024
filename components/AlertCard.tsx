import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface AlertCardProps {
    alert: {
        category: string;
        subcategory: string;
        severity: "Low"|"Medium"|"High";
        address: string;
        timestamp: string;
    }
}

const STYLES = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: 10,
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
})

export default function AlertCard({alert}: AlertCardProps) {
    return (
        <View style={STYLES.container}>
            <MaterialIcons name="campaign" size={40} color="#b71c1c" style={{}} />
            <View style={{
                rowGap: 5,
            }}>
                <Text style={STYLES.subtitle}>Category: {alert.category}</Text>
                <Text style={STYLES.subtitle}>Subcategory: {alert.subcategory}</Text>
                <Text style={STYLES.subtitle}>Severity: {alert.severity}</Text>
                <Text style={STYLES.subtitle}>Address: {alert.address}</Text>
                <Text style={STYLES.subtitle}>Timestamp: {alert.timestamp}</Text>
            </View>
        </View>
    );

}