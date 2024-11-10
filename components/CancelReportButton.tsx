import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function CancelReportButton() {
    const NAVIGATION = useNavigation();

    return (
        NAVIGATION.canGoBack() ?
        <Pressable
            onPress={()=>{
                NAVIGATION.goBack()
            }}
        >
            <MaterialIcons
                name="arrow-back"
                size={29} 
                color="#fff"
                style={{ marginLeft: 20 }}
            />
        </Pressable> : null
    );
}