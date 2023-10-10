import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

export default function JogoVelha({
    changeScreen,
    Jogador1,
    Jogador2
}) {

    const [casas, setCasas] = useState(tabuleiro);
    const [vez, setVez] = useState("X");

    useEffect(() => {
        verificarVitoria();
    }, [casas])

    const verificarQuemGanhou = (vez) => {

        for (let i = 0; i < 3; i++) {
            if (casas[i][0] === vez
                && casas[i][1] === vez
                && casas[i][2] === vez) {
                return true
            }
        }

        for (let i = 0; i < 3; i++) {
            if (casas[0][i] === vez
                && casas[1][i] === vez
                && casas[2][i] === vez) {
                return true
            }
        }

        if (casas[0][0] === vez
            && casas[1][1] === vez
            && casas[2][2] === vez) {
            return true;
        }
        if (casas[0][2] === vez
            && casas[1][1] === vez
            && casas[2][0] === vez) {
            return true;
        }
    };

    const verificarVitoria = () => {
        if (verificarQuemGanhou("X")) {
            alert(`O jogador ${Jogador1} venceu!`);
            voltar();
        } else if (verificarQuemGanhou("O")) {
            alert(`O jogador ${Jogador2} venceu!`);
            voltar();   
        } else {
            let contCasas = 0;

            casas.forEach(linha => {
                linha.forEach(coluna => {
                    if (coluna === "X" || coluna === "O"){
                        contCasas++;
                    }
                });
            });

            if (contCasas === 9) {
                alert("Ninguém venceu!");
                voltar();
            }
        }
    }

    const voltar = () => {
        changeScreen("JogadoresVelha")
    }


    const TrocaPlayer = () => {
        if (vez == "X") {
            setVez("O")
        } else {
            setVez("X")
        }
    }

    const verificarCasa = (linha, coluna) => {
        if (casas[linha][coluna] != "") {
            return;
        }

        const novaCasa = [[...casas[0]], [...casas[1]], [...casas[2]]]
        novaCasa[linha][coluna] = vez;
        setCasas(novaCasa);
        TrocaPlayer();
    }

    const nomeJogador = () => vez === "X" ? Jogador1 : Jogador2

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Jogo da Velha</Text>
            <Text>É a vez do Player: {nomeJogador()} - {vez}</Text>

            {
                casas.map((linha, indexLinha) => {
                    return (
                        <View style={styles.linha} key={indexLinha}>
                            {linha.map((coluna, indexColuna) => (
                                <TouchableOpacity
                                    key={`${indexLinha}${indexColuna}${coluna}`}
                                    onPress={() => verificarCasa(indexLinha, indexColuna)}
                                >                                   
                                    <View style={styles.tabuleiroDoJogo}>
                                        <Text style={styles.casasTabuleiro}>
                                            {coluna}
                                            
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )
                })
            }

            <Button title="voltar" onPress={voltar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    linha: {
        display: "flex",
        flexDirection: "row",
    },
    tabuleiroDoJogo: {
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        borderWidth: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    casasTabuleiro: {
        fontSize: 30,
        color: "#000",
    },
    text: {
        fontSize: 20,
        color: "#000",
    }
});