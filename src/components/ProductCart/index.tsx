import { Image, Text, View } from "react-native";
import ImagemTest from "@/src/assets/images/img-product1.png"
import Button from "../Button";

interface ProductCartProps {
    
}

export default function ProductCart(){
    return(
        <View className="bg-baseThree flex flex-row shadow rounded">
            <View className="w-40">
                <Image source={ImagemTest} className="w-44 h-44"/>
            </View>
            <View className="flex flex-col justify-center w-60 gap-2.5">
                <View className="flex flex-row justify-between items-center">
                    <Text className="color-secondaryOne text-2xl ">SolarTune V1</Text>
                    <Button nameClass="flex flex-row" icon="trash" iconSize={24} iconColor="#FF660E"/>
                </View>
                <View>
                    <Text className="color-secondaryTwo text-3xl">R$ 120</Text>
                </View>
            </View>
        </View>
    )
}