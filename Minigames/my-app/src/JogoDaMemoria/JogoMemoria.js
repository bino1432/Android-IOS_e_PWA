import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Button } from "react-native";

export default function Memoria({ changeScreen, Jogador1, Jogador2 }) {

    const voltar = () => {
        changeScreen("JogadoresMemoria")
    }

    return (

        <View>
            <Text>Jogo da Memoria</Text>
            <Button title="Voltar" onPress={voltar} />
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    }
});