import { Text, Button, View, StyleSheet} from 'react-native';

export default function inicial({
    changeScreen
}) {

    const Velha = () => {
        changeScreen("JogadoresVelha")
    }

    const Memoria = () => {
        changeScreen("JogadoresMemoria")
    }

    const Forca = () => {
        changeScreen("EscolhaPalavra")
    }

    return(
        <View style={styles.container}>
            <Text>Qual minigame você deseja jogar?</Text>
            <Button title='Jogo da Velha' onPress={Velha}/>
            <Button title='Jogo da Forca' onPress={Forca}/>
            <Button title='Jogo da Memoria' onPress={Memoria}/>
        </View>
    );

}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
        
});