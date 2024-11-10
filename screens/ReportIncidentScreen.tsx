import * as Location from 'expo-location';
import { useEffect, useState } from "react";
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 40, // Added top padding for spacing
    },
    formContainer: {
        marginTop: 20,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    submitButton: {
        backgroundColor: '#b71c1c',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    submitText: {
        color: '#fff',
        fontWeight: 'bold',
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
            {/* Form Section */}
            <View style={Styles.formContainer}>
                <View style={Styles.pickerContainer}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        placeholder={{ label: "Incident Category", value: "" }}
                        items={[
                            { label: "Theft", value: "theft" },
                            { label: "Vandalism", value: "vandalism" },
                            { label: "Assault", value: "assault" },
                            { label: "Petty Theft", value: "petty_theft" },
                            { label: "Armed Robbery", value: "armed_robbery" },
                            { label: "Assault with Weapon", value: "assault_weapon" }
                        ]}
                    />
                </View>
            
                <View style={Styles.pickerContainer}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        placeholder={{ label: "Incident Sub-Category", value: null }}
                        items={[
                            { label: "Assault with Weapon", value: "assault_weapon" }
                        ]}
                    />
                </View>

                <View style={Styles.pickerContainer}>
                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        placeholder={{ label: "Incident Severity", value: null }}
                        items={[
                            { label: "Low", value: "low" },
                            { label: "Medium", value: "medium" },
                            { label: "High", value: "high" },
                        ]}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={Styles.submitButton} onPress={() => alert("Submitted")}>
                    <Text style={Styles.submitText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { Picker } from '@react-native-picker/picker';

// const Styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingHorizontal: 20,
//         paddingTop: 40, // Added top padding for spacing
//     },
//     formContainer: {
//         marginTop: 20,
//     },
//     pickerContainer: {
//         borderWidth: 1,
//         borderColor: "#ccc",
//         borderRadius: 8,
//         marginBottom: 15,
//         paddingHorizontal: 10,
//     },
//     submitButton: {
//         backgroundColor: '#b71c1c',
//         paddingVertical: 15,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     submitText: {
//         color: '#fff',
//         fontWeight: 'bold',
//     },
// });

// export default function ReportIncidentScreen() {
//     // Define state variables to store selected values
//     const [incidentCategory, setIncidentCategory] = useState("");
//     const [incidentSubCategory, setIncidentSubCategory] = useState("");
//     const [incidentSeverity, setIncidentSeverity] = useState("");

//     return (
//         <View style={Styles.container}>
//             {/* Form Section */}
//             <View style={Styles.formContainer}>
//                 {/* Incident Category Picker */}
//                 <View style={Styles.pickerContainer}>
//                     <Picker
//                         selectedValue={incidentCategory}
//                         onValueChange={(value) => setIncidentCategory(value)}
//                     >
//                         <Picker.Item label="Incident Category" value="" />
//                         <Picker.Item label="Theft" value="theft" />
//                         <Picker.Item label="Vandalism" value="vandalism" />
//                         <Picker.Item label="Assault" value="assault" />
//                         <Picker.Item label="Petty Theft" value="petty_theft" />
//                         <Picker.Item label="Armed Robbery" value="armed_robbery" />
//                         <Picker.Item label="Assault with Weapon" value="assault_weapon" />
//                     </Picker>
//                 </View>

//                 {/* Incident Sub-Category Picker */}
//                 <View style={Styles.pickerContainer}>
//                     <Picker
//                         selectedValue={incidentSubCategory}
//                         onValueChange={(value) => setIncidentSubCategory(value)}
//                     >
//                         <Picker.Item label="Incident Sub-Category" value="" />
//                         <Picker.Item label="Assault with Weapon" value="assault_weapon" />
//                     </Picker>
//                 </View>

//                 {/* Incident Severity Picker */}
//                 <View style={Styles.pickerContainer}>
//                     <Picker
//                         selectedValue={incidentSeverity}
//                         onValueChange={(value) => setIncidentSeverity(value)}
//                     >
//                         <Picker.Item label="Incident Severity" value="" />
//                         <Picker.Item label="Low" value="low" />
//                         <Picker.Item label="Medium" value="medium" />
//                         <Picker.Item label="High" value="high" />
//                     </Picker>
//                 </View>

//                 {/* Submit Button */}
//                 <TouchableOpacity
//                     style={Styles.submitButton}
//                     onPress={() => alert(`Category: ${incidentCategory}, Sub-Category: ${incidentSubCategory}, Severity: ${incidentSeverity}`)}
//                 >
//                     <Text style={Styles.submitText}>SUBMIT</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }
