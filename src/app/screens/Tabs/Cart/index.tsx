import { ScrollView, Text, View } from "react-native";
import  Constants  from "expo-constants";
import ProductCart from "@/src/components/ProductCart";
import Button from "@/src/components/Button";

export default function Cart(){
    const statusBarHeight = Constants.statusBarHeight;

    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4 pb-4">
            {/* Header */}
            <View className="gap-5">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <View className="bg-baseTwo flex flex-col justify-center rounded-t gap-14 px-5 py-12">
                    <View className="flex flex-row justify-between items-center">
                        <Text className="color-secondaryOne text-2xl font-bold">Valor total:</Text>
                        <Text className="color-secondaryTwo text-3xl font-semibold">R$ 120</Text>
                    </View>
                    <View>
                        <Button name="Comprar agora" nameClass="bg-primary flex flex-row justify-center items-center rounded-full h-16" nameClassText="color-baseThree uppercase"/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}