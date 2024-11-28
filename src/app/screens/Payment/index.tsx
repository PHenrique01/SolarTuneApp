import { ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import  Constants  from "expo-constants";
import Button from "@/src/components/Button";

const statusBarHeight = Constants.statusBarHeight;


export default function Payment(){
    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4 pb-4">
            {/* Header */}
            <View className="gap-10">
                <View>
                    <Text className="color-secondaryOne text-xl">Esolha um método de pagamento</Text>
                </View>
                <View className="gap-5">
                    <Button name="Cartão de crédito" nameClass="bg-baseThree flex flex-row justify-between items-center shadow rounded p-10" nameClassText="color-secondaryOne text-lg" icon="card" iconSize={20} iconColor="#FF660E"/>
                    <Button name="Cartão de débito" nameClass="bg-baseThree flex flex-row justify-between items-center shadow rounded p-10" nameClassText="color-secondaryOne text-lg" icon="card" iconSize={20} iconColor="#FF660E"/>
                    <Button name="PayPal" nameClass="bg-baseThree flex flex-row justify-between items-center shadow rounded p-10" nameClassText="color-secondaryOne text-lg" icon="logo-paypal" iconSize={20} iconColor="#FF660E"/>
                    <Button name="Pix" nameClass="bg-baseThree flex flex-row justify-between items-center shadow rounded p-10" nameClassText="color-secondaryOne text-lg" icon="qr-code-outline" iconSize={20} iconColor="#FF660E" onPress={()=>{router.push({pathname: '/_sitemap'})}}/>
                </View>
                <View className="bg-baseTwo flex flex-col justify-center rounded-t px-5 py-12 gap-20">
                    <Button nameClass="flex flex-row justify-end items-center" icon="chevron-down" iconSize={24} iconColor="#333333"/>
                    <View className="flex flex-row justify-between items-center">
                        <Text className="color-secondaryOne text-2xl font-bold">Valor total:</Text>
                        <Text className="color-secondaryTwo text-3xl font-semibold">R$ 120</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

// Fazer a logica de quando o usuario clicar no icon chevron-down fechar esse conteudo.