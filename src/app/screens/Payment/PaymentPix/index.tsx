import { ScrollView, Text, View } from "react-native";
import  Constants  from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/src/components/Button";

const statusBarHeight = Constants.statusBarHeight;


export default function PaymentPix(){
    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4 pb-4">
            {/* Header */}
            <View className="gap-10">
                <View>
                    <Text className="color-secondaryOne text-xl">Conclua seu pagamento via Pix!</Text>
                </View>
                <View className="flex flex-row justify-center items-center h-96">
                    <Ionicons name="qr-code-outline" size={320} color={"#333333"}/>
                </View>
                <View className="bg-baseTwo flex flex-col justify-center rounded-t px-5 py-12 gap-20 mt-28">
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