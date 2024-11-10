import { signOut } from "aws-amplify/auth";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function LogoutButton() {

    return (
        <Pressable
            onPress={async () => {
                // Log out the user
                await signOut();
            }}
        >
            <MaterialIcons
                name="lock"
                size={29} 
                color="#fff"
                style={{ marginRight: 20 }}
            />
        </Pressable>
    );
}