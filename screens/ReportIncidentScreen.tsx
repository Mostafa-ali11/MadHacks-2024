import { StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location';
import { useEffect, useState } from "react";


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function ReportIncidentScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

      console.log(location);
      

    return (
        <View style={Styles.container}>
            <Text>Report</Text>
        </View>
    );
}