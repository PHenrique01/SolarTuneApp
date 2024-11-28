import { FlatList, ScrollView, View, Text, Image } from "react-native";
import Constants from "expo-constants";
import Header from "@/src/components/Header";
import SearchBar from "@/src/components/SearchBar";
import Banner from "@/src/components/Banner";
import ImagemThree from "@/src/assets/images/img-product3.png";
import ProductSection from "@/src/components/ProductSection";
import Card from "@/src/components/Card";
import SelectItem from "@/src/components/SelectItem";

export default function ProductList() {
    const statusBarHeight = Constants.statusBarHeight;
    
    const products = [
        { id: '1', imageSrc: ImagemThree, productName: "SolarTune V1", productValue: 120 },
        { id: '2', imageSrc: ImagemThree, productName: "SolarTune V2", productValue: 140 },
        { id: '3', imageSrc: ImagemThree, productName: "SolarTune V3", productValue: 150 },
        { id: '4', imageSrc: ImagemThree, productName: "SolarTune V4", productValue: 180 },
    ];

    return (
        <ScrollView style={{ marginTop: statusBarHeight + 8 }} className="px-4 pb-4">
            <View className="gap-5">
                <Header />
                <View className="gap-10">
                    <View>
                        <SearchBar />
                    </View>
                    <View>
                        <Banner desc="SolarTune V1 em promoção!" imageSrc={ImagemThree} />
                    </View>
                    <View>
                        <ProductSection title="Novidades" />
                    </View>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id} 
                        renderItem={({ item }) => (
                            <View className="flex flex-row gap-2">
                                <Card
                                    imageSrc={item.imageSrc}
                                    productName={item.productName}
                                    productValue={item.productValue}
                                />
                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    />
                    <View>
                        <ProductSection title="Fones de ouvidos" />
                    </View>
                    <View className="flex flex-row items-center gap-10">
                        <SelectItem name="Todos" nameClass="bg-primary flex flex-row justify-center items-center max-w-24a h-10 px-4 rounded-full" nameClassText="color-baseThree text-lg" />
                        <SelectItem name="V1" />
                        <SelectItem name="V2" />
                    </View>
                    <FlatList
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View className="flex flex-row gap-2">
                                <Card
                                    imageSrc={item.imageSrc}
                                    productName={item.productName}
                                    productValue={item.productValue}
                                />
                            </View>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                        ItemSeparatorComponent={() => <View style={{ width: 10 }} />} 
                    />
                </View>
            </View>
        </ScrollView>
    );
}