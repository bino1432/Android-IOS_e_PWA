import { View, Button, Text } from "react-native"
import { TextInput } from "react-native-web"

export default function JogoForca ({
    changeScreen,
    Forca
}) {
    
    const voltar = () => {
        changeScreen("EscolhaPalavra")
    }

    return (
        <View>
            <Text>a palavra é: {Forca}</Text>
            <TextInput placeholder="Digite uma letra ou a palavra"/>
            <Button title="Voltar" onPress={voltar}/>
        </View>
    )

}