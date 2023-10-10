import { View, StyleSheet, Text, TextInput, Button } from "react-native-web";

export default function EscolhaPalavra({
    changeScreen, palavra, setPalavra }) {


    const avancar = () => {
        if (palavra != "") {
            changeScreen("JogoForca")
        } else {
            alert("Insira uma palavra")
        }
    }

    const voltar = () => {
        changeScreen("Inicial");
    }
    return (
        <View style={styles.container}>

            <Text>A palavra para o jogo será: {palavra} </Text>
            <TextInput placeholder='Insira a palavra aqui' onChangeText={setPalavra} style={styles.input} />

            <Button title='Iniciar' onPress={avancar} />
            <Button title='Voltar' onPress={voltar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        color: 'black',
    },
});