import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function NoIncidents() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            rowGap: 20,
        }}>
            <MaterialIcons name="shield-moon" size={120} color={"#CFCFCF"}/>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: "#CFCFCF"
            }}>It's looking peaceful out there. No incidents in sight!</Text>
        </View>
    );
}