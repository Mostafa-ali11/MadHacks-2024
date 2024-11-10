import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CancelReportButton from "../components/CancelReportButton";
import LogoutButton from "../components/LogoutButton";
import { StackNavScreenList } from "../types/types";
import DashboardScreen from "./DashboardScreen";
import ReportIncidentScreen from "./ReportIncidentScreen";


const Stack = createStackNavigator<StackNavScreenList>();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={DashboardScreen} 
                options={{
                    title: 'Reported Incidents',
                    headerStyle: {
                      backgroundColor: '#C5050C',
                      height: 120,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 29,
                    },
                    headerRight: () => <LogoutButton />,
                  }} />
                <Stack.Screen name="Report" component={ReportIncidentScreen} 
                    options={{
                        title: 'Report Incident',
                        headerStyle: {
                          backgroundColor: '#C5050C',
                          height: 120,
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                          fontSize: 29,
                        },
                    headerLeft: () => <CancelReportButton />,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}