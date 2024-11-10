import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Dropdown from '../components/Dropdown';
import { DUMMY_DATA } from '../data/dummy';

const STYLES = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      rowGap: 50,
    },
    titleGroup: {
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "medium",
    },
    detailsGroup:{
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
        rowGap: 15,
    },
    button: {
        backgroundColor: "#C5050C",
        borderRadius: 20,
        paddingHorizontal:60,
        paddingVertical: 20,
        elevation: 2
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
});

export default function ReportIncidentScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [categoryId, setCategoryId] = useState<string>("0");
    const [subcategoryId, setSubcategoryId] = useState<string>("0");
    const [severity, setSeverity] = useState<"Low"|"Medium"|"High">("Low");

    // Request permission to access location
    // Get the current location
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

      // Get the categories and subcategories
      const CATEGORIES = DUMMY_DATA.categories.map((category) => ({label: category.title, value: category.id}));
      const SUBCATEGORIES = DUMMY_DATA.categories.find((c) => c.id === categoryId)?.subcategories.map((subcategory) => ({label: subcategory.title, value: subcategory.id}));      

    return (
        <View style={STYLES.container}>
            <View style={STYLES.titleGroup}>
              <Text style={STYLES.title}>Incident Details:</Text>
              <Text style={STYLES.subtitle}>Location: {location?.coords.latitude}, {location?.coords.longitude}</Text>
            </View>
            <View style={STYLES.detailsGroup}>
              <Dropdown
                placeholder='Select incident category'
                data={CATEGORIES}
                onChange={(value) => setCategoryId(value)}
              />

              <Dropdown
                placeholder='Select incident subcategory'
                data={SUBCATEGORIES || []}
                onChange={(value) => setSubcategoryId(value)}
              />

              <Dropdown
                placeholder='Select incident severity'
                data={[
                    {label: 'Low', value: 'Low'},
                    {label: 'Medium', value: 'Medium'},
                    {label: 'High', value: 'High'},
                ]}
                onChange={(value) => setSeverity(value as "Low"|"Medium"|"High")}
              />
            </View>
            <Pressable
              style={STYLES.button}
              onPress={() => console.log({categoryId, subcategoryId, severity, location})}
            >
              <Text style={STYLES.buttonText}>Submit</Text>
            </Pressable>
        </View>
    );
}