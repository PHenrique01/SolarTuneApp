import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

const smallData = [
    {id: '1', name: "Mibr"},
    {id: '2', name: "Furia"},
    {id: '3', name: "Pain"},
    {id: '4', name: "Imperial"},
]

export default function SearchBar(){
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(smallData);

    const handleSearch = (text: string) => {
        setSearchQuery(text);

        if (text === '') {
        setFilteredData(smallData);
        } else {
        const filtered = smallData.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(filtered);
        }
    };

    return(
        <View className="">
            {/* <Text>Aqui vai ser a barra de pesquisa</Text> */}
            {/* <View>
                <Ionicons />
                <TextInput placeholder="abc" placeholderTextColor={"#333333"} value={searchQuery} onChangeText={handleSearch} autoCapitalize="none" autoCorrect={false}/>
                <FlatList data={filteredData} keyExtractor={(item) => item.id} renderItem={({item}) =>(
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                />
            </View> */}
        </View>
    )
}

// Usar a cor baseTwo