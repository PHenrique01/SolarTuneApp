import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ProductReview {
    personName: string;
    personComment: string;
    nameClass?: string;
    icon?: keyof typeof Ionicons.glyphMap;
    iconSize?: number;
    iconColor?: string;
    imageSrc: ImageSourcePropType
}

export default function ProductReview({personName, personComment, nameClass, icon, iconSize, iconColor, imageSrc}: ProductReview){
    return(
        <View className={nameClass}>
            <View className="w-40">
                <Image source={imageSrc} className="w-44 h-44"/>
            </View>
            <View className="gap-2.5">
                <Text className="color-secondaryOne font-medium text-xl">{personName}</Text>
                <Text className="color-secondaryOne text-lg max-w-60">{personComment}</Text>
                <View className="flex flex-row gap-2.5">
                    <Ionicons name={icon} size={iconSize} color={iconColor}/>
                    <Ionicons name={icon} size={iconSize} color={iconColor}/>
                    <Ionicons name={icon} size={iconSize} color={iconColor}/>
                    <Ionicons name={icon} size={iconSize} color={iconColor}/>
                </View>
            </View>
        </View>
    )
}