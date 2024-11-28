import { ScrollView, View } from "react-native";
import  Constants  from "expo-constants";
import ProductCart from "@/src/components/ProductCart";

const statusBarHeight = Constants.statusBarHeight;


export default function Favorite(){
    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4 pb-4">
            {/* Header */}
            <View className="gap-5">
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </View>
        </ScrollView>
    )
}