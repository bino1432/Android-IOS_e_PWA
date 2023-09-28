import { Text, Button, View} from 'react-native';

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
        <View>
            <Text>Qual minigame você deseja jogar?</Text>
            <Button title='Jogo da Velha' onPress={Velha}/>
            <Button title='Jogo da Forca' onPress={Forca}/>
            <Button title='Jogo da Memoria' onPress={Memoria}/>
        </View>
    );

}