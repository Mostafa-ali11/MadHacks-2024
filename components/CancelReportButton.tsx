import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function CancelReportButton() {
    const NAVIGATION = useNavigation();

    return (
        NAVIGATION.canGoBack() ?
        <Button
            title="Cancel"
            onPress={()=>{
                NAVIGATION.goBack()
            }}
        /> : null
    );
}