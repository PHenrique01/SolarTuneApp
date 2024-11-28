import { Image, ScrollView, Text, View } from "react-native";
import Constants  from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import StarsFavorite from "@/src/components/StarsFavorite";
import ImageTest from "@/src/assets/images/img-product1.png"
import Button from "@/src/components/Button";

export default function ProductDetail(){
    const statusBarHeight = Constants.statusBarHeight;
    const {name, value, image} = useLocalSearchParams();

    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4 pb-4">
            {/* Header */}
            <View className="gap-5 mb-5">
                <View className="flex items-center">
                    <Image source={ImageTest} className="w-96 h-96"/>
                </View>
                <View>
                    <StarsFavorite />
                </View>
                <View className="flex flex-row justify-between items-center">
                    <Text className="color-secondaryOne text-2xl font-bold">{name}</Text>
                    <Text className="color-secondaryTwo text-3xl font-semibold">R$ {value}</Text>
                </View>
                <View className="gap-2.5">
                    <Text className="color-secondaryOne text-xl font-medium">Descrição</Text>
                    <Text className="color-secondaryOne text-lg text-justify">
                    SolarTune é um fone de ouvido inovador que combina tecnologia de áudio de alta qualidade com energia solar. Ideal para quem busca praticidade e sustentabilidade, ele possui uma placa solar integrada que carrega a bateria enquanto você usa, permitindo que você aproveite suas músicas sem preocupações com carregamento.
                    </Text>
                </View>
                <View className="flex flex-row justify-between items-center gap-1">
                    <Button name="Adicionar no carrinho" nameClass="flex flex-row-reverse justify-center items-center border rounded-full w-50 h-12 gap-2.5 px-2" nameClassText="color-primary text-base uppercase" icon="cart" iconSize={18} iconColor="#FF660E"/>
                    <Button name="Comprar agora" nameClass="bg-primary flex flex-row justify-center items-center rounded-full w-40 h-12" nameClassText="color-baseThree uppercase"/>
                </View>
            </View>
        </ScrollView>
    )
}