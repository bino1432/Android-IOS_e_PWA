import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function JogoVelha({
    changeScreen,
    Jogador1,
    Jogador2
}) {

    const [vez, setVez] = useState("X")
    const [btn1, setbtn1] = useState("-")
    const [btn2, setbtn2] = useState("-")
    const [btn3, setbtn3] = useState("-")
    const [btn4, setbtn4] = useState("-")
    const [btn5, setbtn5] = useState("-")
    const [btn6, setbtn6] = useState("-")
    const [btn7, setbtn7] = useState("-")
    const [btn8, setbtn8] = useState("-")
    const [btn9, setbtn9] = useState("-")
    

    const handleClick = (event) => {
        changeScreen("JogadoresVelha")
    }
    
    const VerificarVitoria = () => {
        if(btn1 == "X" && btn2 == "X" && btn3 == "X") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn4 == "X" && btn5 == "X" && btn6 == "X") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn7 == "X" && btn8 == "X" && btn9 == "X") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn1 == "X" && btn5 == "X" && btn9 == "X") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn3 == "X" && btn5 == "X" && btn7 == "X") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        }

        if(btn1 == "O" && btn2 == "O" && btn3 == "O") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn4 == "O" && btn5 == "O" && btn6 == "O") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn7 == "O" && btn8 == "O" && btn9 == "O") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn1 == "O" && btn5 == "O" && btn9 == "O") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        } else if (btn3 == "O" && btn5 == "O" && btn7 == "O") {
            alert("O Jogador: " + getPlayerWin() + " Venceu")
            changeScreen("JogadoresVelha")
        }
    }

    const TrocaPlayer = () => {
        if(vez == "X"){
            setVez("O")
        } else {
            setVez("X")
        }
    }

    const FunctionBtn1 = () =>{
        if(btn1 == "-"){
            setbtn1(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn2 = () =>{
        if(btn2 == "-"){
            setbtn2(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn3 = () =>{
        if(btn3 == "-"){
            setbtn3(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn4 = () =>{
        if(btn4 == "-"){
            setbtn4(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn5 = () =>{
        if(btn5 == "-"){
            setbtn5(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn6 = () =>{
        if(btn6 == "-"){
            setbtn6(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn7 = () =>{
        if(btn7 == "-"){
            setbtn7(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn8 = () =>{
        if(btn8 == "-"){
            setbtn8(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const FunctionBtn9 = () =>{
        if(btn9 == "-"){
            setbtn9(vez);
            TrocaPlayer();
        }
        VerificarVitoria();
    }

    const getPlayerName = () => vez === "X" ? Jogador1 : Jogador2

    const getPlayerWin = () => vez === "X" ? Jogador2 : Jogador1

    return (
        <View>
            <Text>Jogo da Velha</Text>
            <Text>É a vez do Player: {getPlayerName()} - {vez}</Text>
            
            <View>
                <View style={styles.container}>
                    <Button title={btn1} onPress={FunctionBtn1}/>
                    <Button title={btn2} onPress={FunctionBtn2}/>
                    <Button title={btn3} onPress={FunctionBtn3} />
                </View>
                <View style={styles.container}>
                    <Button title={btn4} onPress={FunctionBtn4}/>
                    <Button title={btn5} onPress={FunctionBtn5}/>
                    <Button title={btn6} onPress={FunctionBtn6}/>
                </View>
                <View style={styles.container}>
                    <Button title={btn7} onPress={FunctionBtn7}/>
                    <Button title={btn8} onPress={FunctionBtn8}/>
                    <Button title={btn9} onPress={FunctionBtn9}/>
                </View>
            </View>

            <Button title="voltar" onPress={handleClick}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex:1,
        flexDirection: 'row',
        maxHeight: 70
    }

});