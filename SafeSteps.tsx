import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import MainScreen from "./screens/MainScreen";

export default function SafeSteps() {
    const {route} = useAuthenticator();    
    return route === "authenticated" ? <MainScreen/>: <Authenticator/>;
}