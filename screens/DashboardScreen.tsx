import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import AlertCard from "../components/AlertCard";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    lockIcon: {
        color: "#FFFFFF",
    },
    card: {
        width:"100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        elevation: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 18,
    },
    cardContent: {
        flex: 1,
    },
    categoryText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    addressText: {
        fontSize: 15,
        color: "#333333",
    },
    timestampText: {
        fontSize: 12,
        color: "#777777",
    },
    floatingButton: {
        backgroundColor: "#b71c1c",
        borderRadius: 50,
        padding: 20,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOpacity: 0.8,
        shadowRadius: 8 ,
        shadowOffset : { width: 1, height: 13},
    },
    floatingButtonIcon: {
        color: "#FFFFFF",
    },
});

export default function DashboardScreen() {
    const navigation = useNavigation<any>();

    return (
        <View style={Styles.container}>
            {/* Alerts List */}
            <ScrollView
                style={{
                    width: "100%",
                    flex: 1,
                }}
                contentContainerStyle={{
                    paddingVertical: 20,
                    rowGap: 20,
                    alignItems: "center",
                }}
            >
                {[...Array(5)].map((_, index) => (
                    <AlertCard
                        key={index}
                        alert={{
                            category: "Category",
                            subcategory: "Subcategory",
                            severity: "Low",
                            address: "Address",
                            timestamp: "Timestamp",
                        }}
                    />
                ))}
            </ScrollView>
            <View style={{
                width: "100%",
                alignItems: "center",
                paddingBottom: 40,
                paddingTop: 20,
                borderStyle: "solid",
                borderTopWidth: 5,
                borderColor: "#b71c1c",
            }}>
                <Pressable
                    style={Styles.floatingButton}
                    onPress={() => {
                        navigation.navigate("Report");
                    }}
                >
                    <MaterialIcons name="campaign" size={50} style={Styles.floatingButtonIcon} />
                </Pressable>
            </View>
        </View>
    );
}
