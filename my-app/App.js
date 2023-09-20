import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const handleClick = (event) => {
    alert("Click")
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Nome player1: {player1}</Text>
      <TextInput style={styles.input} placeholder='Player 1' onChangeText={setPlayer1}/>
      <Text>Nome player2: {player2}</Text>
      <TextInput style={styles.input} placeholder='Player 2' onChangeText={setPlayer2}/>
      <Button title="botao" onPress={handleClick}/>
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
