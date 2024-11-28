import { Image, ImageSourcePropType, Text, View } from "react-native";
import Button from "../Button";

interface BannerProps {
    desc: string;
    imageSrc: ImageSourcePropType;
}

export default function Banner({desc, imageSrc}: BannerProps){
    return(
        <View className="bg-baseThree flex flex-row shadow-sm rounded gap-1.5">
            <View className="w-40">
                <Image source={imageSrc} className="w-44 h-44"/>
            </View>
            <View className="bg-secondaryOne flex flex-col justify-center items-center w-60 gap-2.5 rounded-r">
                <Text className="color-baseThree text-2xl font-bold max-w-60">{desc}</Text>
                <Button name="Comprar agora" nameClass="bg-primary flex flex-row justify-center items-center w-48 h-14 rounded-full" nameClassText="color-baseThree text-lg uppercase"/>
            </View>
        </View>
    )
}