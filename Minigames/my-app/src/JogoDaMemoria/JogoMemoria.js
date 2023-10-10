import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Button } from "react-native";

export default function Memoria({ changeScreen, Jogador1, Jogador2 }) {
    const [clicks, setClicks] = useState(0);
    const [indexes, setIndexes] = useState([]);
    const [Jogador, setJogador] = useState(Jogador1);
    const [pares, setPares] = useState([0, 0]);

    const voltar = () => {
        changeScreen("JogadoresMemoria")
    }

    const generateGame = () => {
        const emojis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",

            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];

        const game = [
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""]
        ];

        game.forEach((row) => {
            for (let i = 0; i < 5; i++) {
                let index = Math.floor(Math.random() * emojis.length);
                row[i] = emojis[index];
                emojis.splice(index, 1);
            }
        });

        return game;
    }

    const [game, setGame] = useState([...generateGame()]);

    const [showedGame, setShowedGame] = useState([
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }],
        [{ val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }, { val: "", player: "" }]
    ]);

    useEffect(() => {
        verificarVitoria()
    }, showedGame);

    const play = (row, col) => {
        let showedGameTmp = [[...showedGame[0]], [...showedGame[1]], [...showedGame[2]], [...showedGame[3]],
        [...showedGame[4]], [...showedGame[5]], [...showedGame[6]], [...showedGame[7]], [...showedGame[8]],
        [...showedGame[9]]];

        let amountClicks = clicks;
        let clickIndexes = [...indexes];
        let paresTmp = [...pares];
        let gameTmp = [...game];

        if (amountClicks === 0) {

            setIndexes([row, col]);

            showedGameTmp[row][col].val = gameTmp[row][col];

        } else if (amountClicks === 1 && gameTmp[clickIndexes[0]][clickIndexes[1]] == gameTmp[row][col]) {

            showedGameTmp[row][col].val = gameTmp[row][col];

            showedGameTmp[clickIndexes[0]][clickIndexes[1]].player = Jogador;
            showedGameTmp[row][col].player = Jogador;

            Jogador === Jogador1 ? ++paresTmp[0] : ++paresTmp[1];
            setIndexes([]);
            amountClicks = -1;
        } else {
            setTimeout(() => {
                showedGameTmp[clickIndexes[0]][clickIndexes[1]].val = "";
                showedGameTmp[row][col].val = "";
                setShowedGame([...showedGameTmp])
            }, 1000);

            showedGameTmp[row][col].val = gameTmp[row][col];
            setIndexes([]);
            amountClicks = -1;
            setJogador(Jogador === Jogador1 ? Jogador2 : Jogador1);
        }

        setPares([...paresTmp]);
        setShowedGame([...showedGameTmp])
        ++amountClicks;
        setClicks(amountClicks);

    }

    const verificarVitoria = () => {
        let temGanhador = true;
        showedGame.forEach((row) => {
            row.forEach((card) => {
                if (card.val == "") {
                    temGanhador = false;
                }
            });
        });
        temGanhador ? setTimeout(() => { acabarJogo() }, 10) : 0;
    }

    const acabarJogo = () => {
        alert("O jogo Acabou")
        changeScreen("JogadoresMemoria");
    }



    return (
        <View style={styles.container}>
            <Text>Jogo da Memória</Text>
            <View>
                {
                    showedGame.map((row, indexRow) => {
                        return (
                            <View style={styles.row} key={indexRow}>
                                {row.map((column, indexColumn) => (
                                    <Pressable
                                        key={`${indexRow}, ${indexColumn}, ${column}`}
                                        onPress={() => play(indexRow, indexColumn)}
                                        disabled={(column.val != "")}
                                    >
                                        <View
                                            style={(column.val != "" ? (column.player != "" ? (column.player == Jogador1 ? styles.cardGameJog1 : styles.cardGameJog2) : styles.cardGameDisabled) : styles.cardGame)}

                                        >
                                            <Text style={styles.cardGameFont}>
                                                {column.val}
                                            </Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        )
                    })
                }
            </View>
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
    },
    row: {
        display: "flex",
        flexDirection: "row",
    },
    cardGame: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#2196f3",
        alignItems: "center",
    },
    cardGameJog1: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        alignItems: "center",
    },
    cardGameJog2: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        alignItems: "center",
    },
    cardGameDisabled: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        alignItems: "center",
    },
    cardGameFont: {
        fontSize: 25,
        color: "Black",
    },
    Jogador1: {
        color: "#B83D16",
    },
    Jogador2: {
        color: "#066B52",
    }
});