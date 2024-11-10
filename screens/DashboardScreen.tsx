// import { useNavigation } from "@react-navigation/native";
// import { Button, StyleSheet, Text, View } from "react-native";

// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
// });

// export default function DashboardScreen() {    
//     const NAVIGATION = useNavigation<any>();
    
//     return (
//         <View style={Styles.container}>
//             <Text>Dashboard</Text>
//             <Button
//                 title="Report Incident"
//                 onPress={()=>{
//                     NAVIGATION.navigate("Report")
//                 }}
//             />
//         </View>
//     );
// }

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Ensure you have @expo/vector-icons installed

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    lockIcon: {
        color: "#FFFFFF",
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 16,
    },
    card: {
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
        position: "absolute",
        bottom: 25,
        right: 32,
        backgroundColor: "#b71c1c",
        borderRadius: 50,
        padding: 28,
        elevation: 5,
    },
    floatingButtonIcon: {
        color: "#FFFFFF",
    },
});

export default function DashboardScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={Styles.container}>
            {/* Header */}
            {/* <View style={Styles.header}>
                <Text style={Styles.headerText}>Safe Steps</Text>
                <MaterialIcons name="lock" size={24} style={Styles.lockIcon} />
            </View> */}

            {/* Title */}
            <Text style={Styles.title}>Latest Alerts</Text>

            {/* Alerts List */}
            <ScrollView>
                {[...Array(5)].map((_, index) => (
                    <View key={index} style={Styles.card}>
                        <MaterialIcons name="campaign" size={32} color="#b71c1c" style={Styles.icon} />
                        <View style={Styles.cardContent}>
                            <Text style={Styles.categoryText}>Category - SubCategory</Text>
                            <Text style={Styles.addressText}>Address</Text>
                            <Text style={Styles.timestampText}>Timestamp</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Floating Action Button "capaign" is what creates this alarm button*/}
            <TouchableOpacity
                style={Styles.floatingButton}
                onPress={() => {
                    navigation.navigate("Report");
                }}
            >
                <MaterialIcons name="campaign" size={24} style={Styles.floatingButtonIcon} />
            </TouchableOpacity>
        </View>
    );
}
