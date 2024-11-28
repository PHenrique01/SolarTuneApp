import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import Button from "@/src/components/Button";
import ImageInitial from "@/src/assets/images/img-initial.png"
import ImageLogoGrande from "@/src/assets/images/img-logo1.png"

export default function Index(){
  return(
    <View className="flex-1 justify-center items-center mx-4 gap-10">
      <View>
        <Image source={ImageInitial} className="w-96 h-96"/>
      </View>
      <View className="flex flex-col items-center gap-2.5 ">
        <View>
          <Image source={ImageLogoGrande}/>
        </View>
        <Text className="color-secondaryOne text-xl text-center">
          "A música ganha nova vida através da tecnologia dos fones de ouvido."
        </Text>
      </View>
      <View className="flex flex-col gap-4">
        <Button name="Login" nameClass="bg-primary flex flex-row items-center justify-center rounded-full w-96 h-16" nameClassText="color-baseOne uppercase" onPress={() => {router.push({pathname: '/screens/Login'})}}/>
        <Button name="Inscrever-se" nameClass="flex flex-row items-center justify-center border rounded-full w-96 h-16" nameClassText="color-primary uppercase" onPress={() =>{router.push({pathname: '/screens/Register'})}}/>
      </View>
    </View>
  );
}