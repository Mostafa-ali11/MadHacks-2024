import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./DashboardScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function MainScreen() {
    console.log("MainScreen");
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}