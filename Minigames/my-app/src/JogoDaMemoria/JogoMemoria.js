import { Button, View, Text } from "react-native";

export default function JogoMemoria ({
    changeScreen
}) {
    
    const voltar = () => {
        changeScreen("JogadoresMemoria")
    }

    return (
        <View>
            <Text>Tela Jogo da memoria!</Text>
            <Button title="Voltar" onPress={voltar}/>
        </View>
    )
}