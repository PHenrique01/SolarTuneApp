import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputProps {
    label?: string;
    name?: string;
    nameClass?: string;
    nameClassText?: string;
    placeholderName?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    onBlur?: (e: string) => void;
}

export default function Input({label, name, nameClass, nameClassText, icon, iconSize, iconColor, placeholderName, secureTextEntry, value,onChangeText, onBlur}: InputProps) {
    return (
        <View className="flex flex-col gap-2.5">
            <View className="flex flex-row items-center gap-2">
                {icon && (
                    <Ionicons name={icon} size={iconSize} color={iconColor} />
                )}
                {label && <Text className={nameClassText}>{label}</Text>}
            </View>
            <TextInput className={nameClass} placeholder={placeholderName} secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText} onBlur={() => onBlur && onBlur(name ?? '')} />
        </View>
    );
}
