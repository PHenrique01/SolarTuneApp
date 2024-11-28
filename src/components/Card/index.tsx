import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import Button from "../Button";
import { router } from "expo-router";

interface CardProps {
    productName: string;
    productValue: number;
    imageSrc: ImageSourcePropType;
}

export default function Card({productName, productValue, imageSrc}: CardProps){

    return(
        <TouchableOpacity className="bg-baseThree flex flex-col shadow rounded p-1" onPress={() => {router.push({pathname: "/screens/Product/ProductDetail", params: {name: productName, value: productValue}})}}>
            <View className="flex flex-row gap-2.5 w-48">
                <Image source={imageSrc} className="w-36 h-36"/>
                <Button nameClass="bg-baseThree flex justify-start items-center shadow w-10 h-10 relative right-2 rounded-full" iconClass="absolute top-2" icon="heart" iconSize={24} iconColor="#333333"/>
            </View>
            <View className="pl-2.5 gap-1.5">
                <Text className="color-secondaryOne text-xl">{productName}</Text>
                <Text className="color-secondaryTwo text-2xl">R$ {productValue}</Text>
            </View>
        </TouchableOpacity>
    )
}

// Crie uma validação/verificação de quando o usuário clicar no item, deve desativar o hover do icone favorito.