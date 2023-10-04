import { View, Button, Text } from "react-native"

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
            <Button title="Voltar" onPress={voltar}/>
        </View>
    )

}