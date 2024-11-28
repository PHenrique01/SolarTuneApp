import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name="Home/index" options={{tabBarLabel: "Home", tabBarIcon: ({color}) => <Ionicons name="home" size={20} color={"#333333"}/>}}/>
            <Tabs.Screen name="Cart/index" options={{tabBarLabel: "Carrinho", tabBarIcon: ({color}) => <Ionicons name="cart" size={20} color={"#333333"}/>}}/>
            <Tabs.Screen name="Favorite/index" options={{tabBarLabel: "Favorito", tabBarIcon: ({color}) => <Ionicons name="heart" size={20} color={"#333333"}/>}}/>
            <Tabs.Screen name="Profile/index" options={{tabBarLabel: "Carrinho", tabBarIcon: ({color}) => <Ionicons name="person" size={20} color={"#333333"}/>}}/>
        </Tabs>
    )
}