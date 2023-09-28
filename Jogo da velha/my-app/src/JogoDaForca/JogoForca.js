import { View, Button, Text } from "react-native"

export default function JogoForca ({
    changeScreen
}) {
    
    const voltar = () => {
        changeScreen("EscolhaPalavra")
    }

    return (
        <View>
            <Text>Tela Jogo da Forca</Text>
            <Button title="Voltar" onPress={voltar}/>
        </View>
    )

}