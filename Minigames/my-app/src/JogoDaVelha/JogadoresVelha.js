import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function JogadoresVelha({
    mudarNomeJogadores,
    changeScreen
}) {
  
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleClick = () => {
    if(player1 == "" && player2 == "") {
      alert("Insira o nome dos Jogadores")
    } else if (player1 == "") {
      alert("Insira o nome do Jogador 1")
    } else if (player2 == "") {
      alert("Insira o nome do Jogador 2")
    } else {
      if(mudarNomeJogadores) {
        mudarNomeJogadores(player1, player2)
        alert(player1 + " x " + player2)
        changeScreen("JogoVelha")
      }
    }
  } 

  const voltar = () => {
    changeScreen("Inicial")
  }

  return (
    <View style={styles.container}>
      <Text>Bem Vindo ao jogo da Velha</Text>
      <Text>Nome player1: {player1}</Text>
      <TextInput style={styles.input} placeholder='Player 1' onChangeText={setPlayer1}/>
      <Text>Nome player2: {player2}</Text>
      <TextInput style={styles.input} placeholder='Player 2' onChangeText={setPlayer2}/>
      <Button title="Avançar" onPress={handleClick}/>
      <Button title="Voltar" onPress={voltar}/>
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
  input: {
    width: '80%',
    heigth: 20,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
});
