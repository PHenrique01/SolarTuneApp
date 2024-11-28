import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../Button";

export default function StarsFavorite(){
    return(
        <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row gap-2.5">
                <Ionicons name="star" size={18} color="#FF660E"/>
                <Text className="">4.5 (200)</Text>
            </View>
            <Button icon="heart" iconSize={40} iconColor="#333333" />
        </View>
    )
}