import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CancelReportButton from "../components/CancelReportButton";
import DashboardScreen from "./DashboardScreen";
import ReportIncidentScreen from "./ReportIncidentScreen";
import { StackNavScreenList } from "../types/types";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";


const Stack = createStackNavigator<StackNavScreenList>();

export default function MainScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={DashboardScreen} 
                options={{
                    title: 'Safe Steps',
                    headerStyle: {
                      backgroundColor: '#b71c1c',
                      height: 120,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize: 29,
                    },
                    headerRight: () => (
                        <MaterialIcons
                          name="lock"
                          size={29} 
                          color="#fff"
                          style={{ marginRight: 22 }}
                        />
                      ),
                  }} />
                <Stack.Screen name="Report" component={ReportIncidentScreen} 
                    options={{
                        title: 'Safe Steps',
                        headerStyle: {
                          backgroundColor: '#b71c1c',
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