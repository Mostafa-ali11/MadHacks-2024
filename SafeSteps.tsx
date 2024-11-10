import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import MainScreen from "./screens/MainScreen";

export default function SafeSteps() {
    const {route} = useAuthenticator();
    console.log(route);
    
    return route === "authenticated" ? <MainScreen/>: <Authenticator/>;
}