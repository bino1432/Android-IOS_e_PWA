import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import JogadoresVelha from './src/JogoDaVelha/JogadoresVelha';
import JogoVelha from './src/JogoDaVelha/JogoVelha';
import JogadoresMemoria from './src/JogoDaMemoria/JogadoresMemoria';
import JogoMemoria from './src/JogoDaMemoria/JogoMemoria';
import EscolhaPalavra from './src/JogoDaForca/EscolhaPalavra';
import JogoForca from './src/JogoDaForca/JogoForca';
import Inicial from './src/Inicial';

export default function App() {
  
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [palavra, setPalavra] = useState("");
  const [screen, setScreen] = useState("Inicial");

  const checkScreen = (checkScreen) => checkScreen === screen;

  const setJogadores = (nome1, nome2) => {
    setPlayer1(nome1);
    setPlayer2(nome2);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("Inicial") && (
        <Inicial
        changeScreen={changeScreen}
        />
      )}
      {checkScreen("JogadoresVelha") && (
        <JogadoresVelha 
        mudarNomeJogadores={setJogadores}
        changeScreen={changeScreen}
        />
      )}
      {checkScreen("JogoVelha") && (
        <JogoVelha 
        changeScreen={changeScreen}
        Jogador1={player1}
        Jogador2={player2}
        />
      )}
      {checkScreen("EscolhaPalavra") && (
        <EscolhaPalavra 
        changeScreen={changeScreen}
        palavra={palavra}
        setPalavra={setPalavra}
        />
      )}
      {checkScreen("JogoForca") && (
        <JogoForca 
        changeScreen={changeScreen}
        palavra={palavra}
        setPalavra={setPalavra}
        />
      )}
      {checkScreen("JogadoresMemoria") && (
        <JogadoresMemoria 
        mudarNomeJogadores={setJogadores}
        changeScreen={changeScreen} 
        />
      )}
      {checkScreen("JogoMemoria") && (
        <JogoMemoria 
        changeScreen={changeScreen}
        Jogador1={player1}
        Jogador2={player2}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});