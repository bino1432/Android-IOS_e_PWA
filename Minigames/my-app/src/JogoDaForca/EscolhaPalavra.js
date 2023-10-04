import { useState } from "react"
import { Button, View, Text, TextInput } from "react-native"

export default function EscolhaPalavra ({
    changeScreen,
    mudarPalavra
}) {

    const [palavra, setPalavra] = useState("");
    
    const voltar = () => {
        changeScreen("Inicial")
    }

    const avancar = () => {
        if(palavra == ""){
            alert("Insira uma Palavra!")
        } else {
            if (mudarPalavra) {
                mudarPalavra(palavra)
                changeScreen("JogoForca")
            }
        }
    }

    return (
        <View>
            <Text>Digite uma Palavra para tentar adivinha-la</Text>
            <TextInput placeholder="Insira uma Palavra" onChangeText={setPalavra}/>
            <Button title="Confirmar" onPress={avancar}/>
            <Button title="Voltar" onPress={voltar} />
        </View>
    )

}