import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function DashboardScreen() {    
    const NAVIGATION = useNavigation<any>();
    
    return (
        <View style={Styles.container}>
            <Text>Dashboard</Text>
            <Button
                title="Report Incident"
                onPress={()=>{
                    NAVIGATION.navigate("Report")
                }}
            />
        </View>
    );
}