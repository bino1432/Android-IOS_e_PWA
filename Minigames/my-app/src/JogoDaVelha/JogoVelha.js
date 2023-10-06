import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const startValues = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

export default function JogoVelha({
    changeScreen,
    Jogador1,
    Jogador2
}) {

    const [states, setStates] = useState(startValues);
    const [vez, setVez] = useState("X");

    useEffect(() => {
        checkWin();
    }, [states])

    const checkPlayerWin = (vez) => {
        // check lines
        for (let i = 0; i < 3; i++) {
            if (states[i][0] === vez
                && states[i][1] === vez
                && states[i][2] === vez) {
                return true
            }
        }
        // check columns
        for (let i = 0; i < 3; i++) {
            if (states[0][i] === vez
                && states[1][i] === vez
                && states[2][i] === vez) {
                return true
            }
        }

        // check others
        if (states[0][0] === vez
            && states[1][1] === vez
            && states[2][2] === vez) {
            return true;
        }
        if (states[0][2] === vez
            && states[1][1] === vez
            && states[2][0] === vez) {
            return true;
        }
    };

    const endPlay = (message) => {
        alert(message);
        setStates(startValues);
        handleClick();
    }

    const checkWin = () => {
        if (checkPlayerWin("X")) {
            endPlay(`O jogador ${Jogador1} venceu!`);
        } else if (checkPlayerWin("O")) {
            endPlay(`O jogador ${Jogador2} venceu!`);
        } else {
            let countStates = 0;

            states.forEach(line => {
                line.forEach(column => {
                    if (column === "X" || column === "O") countStates++;
                });
            });

            if (countStates === 9) {
                endPlay("Ninguém venceu!");
            }
        }
    }

    const handleClick = (event) => {
        changeScreen("JogadoresVelha")
    }


    const TrocaPlayer = () => {
        if (vez == "X") {
            setVez("O")
        } else {
            setVez("X")
        }
    }

    const handleClickPosition = (line, column) => {
        if (states[line][column] != "") {
            return;
        }

        const newState = [[...states[0]], [...states[1]], [...states[2]]]
        newState[line][column] = vez;
        setStates(newState);
        TrocaPlayer();
    }

    const getPlayerName = () => vez === "X" ? Jogador1 : Jogador2

    // const getPlayerWin = () => vez === "X" ? Jogador2 : Jogador1

    return (
        <View style={styles.container}>
            <Text>Jogo da Velha</Text>
            <Text>É a vez do Player: {getPlayerName()} - {vez}</Text>

            {/* <View style={styles.board}>
                <View style={styles.lines} />
                <View style={[styles.lines, {
                    transform: [
                        { translateX: 200 }
                    ]
                }]} />
                <View style={[styles.lines, {
                    height: 3,
                    width: 306,
                    transform: [
                        { translateY: 100 }
                    ]
                }]} />
                <View style={[styles.lines, {
                    height: 3,
                    width: 306,
                    transform: [
                        { translateY: 200 }
                    ]
                }]} />
            </View> */}

            {
                states.map((line, indexLine) => {
                    return (
                        <View style={styles.line} key={indexLine}>
                            {line.map((column, indexColumn) => (
                                <TouchableOpacity
                                    key={`${indexLine}${indexColumn}${column}`}
                                    onPress={() => handleClickPosition(indexLine, indexColumn)}
                                >
                                    <View style={styles.buttonGame}>
                                        <Text style={styles.buttonGameFont}>
                                            {column}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )
                })
            }

            <Button title="Trocar" onPress={TrocaPlayer} />
            <Button title="voltar" onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    board: {
        borderWidth: 3,
        height: 312,
        width: 312,
    },
    line: {
        display: "flex",
        flexDirection: "row"
    },
    lines: {
        backgroundColor: '#000',
        height: 306,
        width: 3,
        position: 'absolute',
        transform: [
            { translateX: 100 }
        ],
    },
    buttonGame: {
        backgroundColor: 'red',
        width: 80,
        height: 80,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonGameFont: {
        fontSize: 50,
        color: "#fff"
    }
});