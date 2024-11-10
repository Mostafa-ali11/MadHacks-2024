import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CancelReportButton from "../components/CancelReportButton";
import DashboardScreen from "./DashboardScreen";
import ReportIncidentScreen from "./ReportIncidentScreen";
import { StackNavScreenList } from "../types/types";

const Stack = createStackNavigator<StackNavScreenList>();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={DashboardScreen}/>
                <Stack.Screen name="Report" component={ReportIncidentScreen} options={{
                    title: "Report Incident",
                    headerLeft: () => <CancelReportButton/>,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}