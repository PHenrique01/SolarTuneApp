import { ScrollView, Text, View } from "react-native";
import Constants from "expo-constants"
import Header from "@/src/components/Header";
import Button from "@/src/components/Button";
import ProductReview from "@/src/components/ProductReview";
import ImagemProductOne from "@/src/assets/images/img-product1.png"
import ImagemProductThree from "@/src/assets/images/img-product3.png"
import { router } from "expo-router";

export default function Home(){
    const statusBarHeight = Constants.statusBarHeight;

    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4">
            <Header/>
            <View className="gap-14">
                <View className="flex flex-col gap-5">
                    <Text className="color-secondaryOne text-4xl font-bold">Descubra os fones de ouvido que combinam tecnologia avançada e sustentabilidade.</Text>
                    <Button name="Ver agora" nameClass="bg-primary flex flex-row justify-center items-center w-48 h-14 rounded-full gap-2.5" nameClassText="color-baseThree text-xl uppercase" icon="arrow-forward" iconSize={20} iconColor="#FFFFFF" onPress={() =>{router.push({pathname: '/screens/Product/ProductList'})}}/>
                </View>
                <View className="gap-10">
                    <ProductReview nameClass="bg-baseThree flex flex-row items-center shadow-sm rounded" imageSrc={ImagemProductThree} personName="Rafaeal 'Saffe' Costa" personComment='"Som incrível! A qualidade é fantástica!"' icon="star" iconSize={20} iconColor="#FF660E"/>
                    <ProductReview nameClass="bg-baseThree flex flex-row-reverse items-center shadow-sm rounded" imageSrc={ImagemProductOne} personName="Felipe 'insani' Yuji" personComment='"Conforto e estilo no dia a dia."' icon="star" iconSize={20} iconColor="#FF660E"/>
                </View>
            </View>
        </ScrollView>
    )
}