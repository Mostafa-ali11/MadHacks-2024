import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Dropdown from '../components/Dropdown';
import { DUMMY_DATA } from '../data/dummy';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../amplify/data/resource';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

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
    detailsGroup: {
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
        rowGap: 15,
    },
    button: {
        backgroundColor: "#C5050C",
        borderRadius: 20,
        paddingHorizontal: 60,
        paddingVertical: 20,
        elevation: 2
    },
    buttonText: {
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
        alignSelf: "center",
    },
    buttonDisabled: {
        backgroundColor: "#A9A9A9",
        elevation: 0,
    },
    buttonTextDisabled: {
        color: "#D3D3D3",
    }
});

const CLIENT = generateClient<Schema>();

export default function ReportIncidentScreen() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [subCategory, setSubCategory] = useState<string | null>(null);

    const AUTH = useAuthenticator();

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

    const CATEGORIES = DUMMY_DATA
        .categories
        .map((category) => ({ label: category.title, value: category.title }));

    const SUBCATEGORIES = DUMMY_DATA
        .categories
        .find((c) => c.title === category)
        ?.subcategories.map(
            (subcategory) => ({ label: subcategory.title, value: subcategory.title })
        );

    const isDisabled = !category;

    const handleSubmission = async () => {
        if (isDisabled) {
            console.error("Category is required to submit incident.");
            return;
        }
        
        try {
            console.log("Submitting incident...");
            
            const res = await CLIENT.models.Incident.create({
                category: category,
                subcategory: subCategory,
                location: {
                    latitude: location?.coords.latitude || -1,
                    longitude: location?.coords.longitude || -1
                },
                timestamp: new Date().toISOString(),
                reporterID: AUTH.user?.userId || ""
            });
        } catch (error) {
            console.error(error);
        }
    };

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
                    onChange={(value) => setCategory(value)}
                />

                <Dropdown
                    placeholder='Select incident subcategory'
                    data={SUBCATEGORIES || []}
                    onChange={(value) => setSubCategory(value)}
                />
            </View>

            <Pressable
                style={[STYLES.button, isDisabled && STYLES.buttonDisabled]}
                onPress={handleSubmission}
                disabled={isDisabled}
            >
                <Text style={[STYLES.buttonText, isDisabled && STYLES.buttonTextDisabled]}>
                    Submit
                </Text>
            </Pressable>
        </View>
    );
}
