import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function JogoVelha({
    changeScreen
}) {
    const [b1, setb1] = useState("");
    const [b2, setb2] = useState("");
    const [b3, setb3] = useState("");
    const [b4, setb4] = useState("");
    const [b5, setb5] = useState("");
    const [b6, setb6] = useState("");
    const [b7, setb7] = useState("");
    const [b8, setb8] = useState("");
    const [b9, setb9] = useState("");
    const [vez, setVez] = useState("player1");

    const handleClick = (event) => {
        changeScreen("JogadoresVelha")
    }

    const handleClickB1 = (event) => {
        if(!b1){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB2 = (event) => {
        if(!b2){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB3 = (event) => {
        if(!b3){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB4 = (event) => {
        if(!b4){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB5 = (event) => {
        if(!b5){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB6 = (event) => {
        if(!b6){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB7 = (event) => {
        if(!b7){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB8 = (event) => {
        if(!b8){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    const handleClickB9 = (event) => {
        if(!b9){
            mudarVez();
            if(vez == player1){
                setb9("X");
            }else{
                setb9("O");
            }
        }
    }

    return (
        <View>
            <Text>Jogo</Text>
            <Button title="voltar" onPress={handleClick}/>

            <View style={styles.container}>
                <Button title={b1} onPress={handleClickB1}/>
                <Button title={b2} onPress={handleClickB2}/>
                <Button title={b3} onPress={handleClickB3}/>
            </View>
            <View style={styles.container}>
                <Button title={b4} onPress={handleClickB4}/>
                <Button title={b5} onPress={handleClickB5}/>
                <Button title={b6} onPress={handleClickB6}/> 
            </View>
            <View style={styles.container}>
                <Button title={b7} onPress={handleClickB7}/>
                <Button title={b8} onPress={handleClickB8}/>
                <Button title={b9} onPress={handleClickB9}/>
            </View>
        </View>
    )
}

function mudarVez() {
    if({vez} == player1){
        setVez("player2")
    } else {
        setVez("player1")
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        maxHeight: 70,
    }
});