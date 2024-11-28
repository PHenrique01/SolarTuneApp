import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

interface ButtonProps {
    name?: string;
    nameClass?: string;
    nameClassText?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    iconSize?: number;
    iconColor?: string;
    iconClass?: string
    onPress?(): void;
}

export default function Button({name, nameClass, nameClassText, icon, iconSize, iconColor, iconClass, onPress}: ButtonProps){
    return(
        <TouchableOpacity className={nameClass} onPress={onPress}>
            <Text className={nameClassText}>{name}</Text>
            <Ionicons className={iconClass} name={icon} size={iconSize} color={iconColor}/>
        </TouchableOpacity>
    )
}