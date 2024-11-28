import { Image, Text, View } from "react-native";
import ImagemHeader from "@/src/assets/images/img-logo2.png"

export default function Header(){
    return(
        <View className="">
            <Image source={ImagemHeader}/>
        </View>
    )
}