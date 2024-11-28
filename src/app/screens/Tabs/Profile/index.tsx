import  Constants  from "expo-constants";
import Button from "@/src/components/Button";
import { ScrollView, Text, View } from "react-native";
import Input from "@/src/components/Input";

export default function Profile(){
    const statusBarHeight = Constants.statusBarHeight;


    return(
        <ScrollView style={{marginTop: statusBarHeight + 8}} className="px-4 pb-4">
            {/* Header */}
            <View className="mt-2.5 gap-10">
                <View className="flex flex-row justify-center items-center relative">
                    <View className="bg-secondaryOne w-60 h-60 rounded-full">
                    </View>
                    <Button nameClass="bg-primary flex flex-row justify-center items-center w-12 h-12 rounded-full absolute bottom-0 right-32" icon="create-outline" iconSize={24} iconColor="#FFFFFF"/>
                </View>
                <View className="flex flex-row justify-center">
                    <Text className="color-secondaryOne text-2xl">Nome do usuário</Text>
                </View>
                <View className="gap-4">
                    <Input nameClass="border rounded h-10 px-2" icon="person" iconSize={20} iconColor="#000000" label="Nome" name="name" nameClassText="color-secondaryTwo"/>
                    <Input nameClass="border rounded h-10 px-2" icon="mail" iconSize={20} iconColor="#000000" label="E-mail" name="email" nameClassText="color-secondaryTwo"/>
                    <Input nameClass="border rounded h-10 px-2" icon="lock-closed" iconSize={20} iconColor="#000000" label="Senha" name="password" nameClassText="color-secondaryTwo"/>
                </View>
                <View className="mt-20">
                    <Button name="Sair" nameClass="bg-primary flex flex-row-reverse items-center justify-center rounded-full h-16 gap-2.5" nameClassText="color-baseOne uppercase" icon="exit-outline" iconSize={24} iconColor="#FFFFFF"/>
                </View>
            </View>
        </ScrollView>
    )
}