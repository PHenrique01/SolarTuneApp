import { Text, View } from "react-native";
import Button from "../Button";

interface ProductSectionProps {
    title: string;
}

export default function ProductSection({title}:ProductSectionProps){
    return(
        <View className="flex flex-row justify-between items-center">
            <Text className="color-secondaryTwo text-xl">{title}</Text>
            <Button name="Ver tudo" nameClass="flex flex-row justify-center items-center" nameClassText="color-primary text-lg" icon="chevron-forward" iconSize={20} iconColor="#FF660E"/>
        </View>
    )
}