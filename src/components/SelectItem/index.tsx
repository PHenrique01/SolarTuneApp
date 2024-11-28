import { Text, TouchableOpacity, View } from "react-native";

interface SelectItemProps {
    name: string;
    nameClass?: string;
    nameClassText?: string;
}

export default function SelectItem({name, nameClass, nameClassText}:SelectItemProps){
    return(
        <TouchableOpacity className={nameClass}>
            <Text className={nameClassText}>{name}</Text>
        </TouchableOpacity>
    )
}

// Fazer uma verificação de quando o usuario clicar no item, tem que desativar outro item.