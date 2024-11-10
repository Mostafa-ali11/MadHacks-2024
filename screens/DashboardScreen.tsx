import { StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function DashboardScreen() {
    console.log("DashboardScreen");
    
    return (
        <View style={Styles.container}>
            <Text>Dashboard</Text>
        </View>
    );
}