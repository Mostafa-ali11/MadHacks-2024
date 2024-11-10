import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const STYLES = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputIOS: {
        fontSize: 16,
        paddingVertical: 18,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    icon: {
        backgroundColor: 'transparent',
        borderTopWidth: 10,
        borderTopColor: 'gray',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        position: "relative",
        top: 24,
        right: 10
    }
})

interface DropdownProps {
    placeholder?: string;
    data: { label: string, value: string }[];
    onChange?: (value: string|null) => void;
    value: string|null;
}

export default function Dropdown({placeholder, data, onChange, value }: DropdownProps) {
    return (
        <View style={STYLES.container}>
            <RNPickerSelect
                placeholder={{
                    label: placeholder || "Selection an option",
                    value: null
                }}
                style={{ inputIOS: STYLES.inputIOS }}
                onValueChange={(value) => onChange && onChange(value)}
                items={data}
                Icon={() => {
                    return <View style={STYLES.icon} />;
                }}
                value={value}
            />
        </View>
    );
}