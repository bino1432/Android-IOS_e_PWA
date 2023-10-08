import { useEffect, useState } from "react"
import { View, Button, Text } from "react-native"
import { TextInput } from "react-native-web"

export default function JogoForca({
    changeScreen,
    Forca
}) {

    const [palavra, setPalavra] = useState(Forca)
    const [palavraEscondia, setPalavraEscondia] = useState([])
    const [letras, setLetras] = useState([])
    const [vidas, setVidas] = useState(6)

    useEffect(() => {
        const indexAleatorio = Math.floor(Math.random() * palavra.length);
        setPalavra(palavra[indexAleatorio].toUpperCase());

        setPalavraEscondia(Array(palavra.leght).fill('_'));
    }, []);

    const voltar = () => {
        changeScreen("EscolhaPalavra")
    }

    const veridicarLetras = (letra) => {
        if (palavra.includes(letra)) {
            const newPalavraEscondida = palavraEscondia.map((char, index) =>
                palavra[index] === letra ? letra : char
            );
            setPalavraEscondiapalavraEscondia(newPalavraEscondida);
        } else {
            setVidas(vidas - 1);
        }

        setLetras([...letras, letra]);
    };

    const ganhou = palavraEscondia.join('') === palavra;
    const perdeu = vidas === 0;

    return (
        // <View>
        //     <Text>a palavra é: {Forca}</Text>
        //     <Text>Tente acertar: {palavraEscondia}</Text>
        //     <TextInput placeholder="Digite uma letra" />
        //     <Button title="Voltar" onPress={voltar} />
        // </View>
        <View style={styles.container}>
            <Text style={styles.word}>{palavraEscondia.join(' ')}</Text>
            <Text style={styles.guessedLetters}>
                Guessed Letters: {letras.join(', ')}
            </Text>
            <Text style={styles.remainingAttempts}>
                Remaining Attempts: {vidas}
            </Text>
            {ganhou && <Text style={styles.winMessage}>You Win!</Text>}
            {perdeu && <Text style={styles.loseMessage}>You Lose!</Text>}
            {!ganhou && !perdeu && (
                <View style={styles.keyboard}>
                    {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letra, index) => (
                        <Button
                            key={index}
                            title={letra}
                            onPress={() => veridicarLetras(letra)}
                            disabled={letras.includes(letra)}
                        />
                    ))}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    word: {
        fontSize: 24,
        marginBottom: 20,
    },
    guessedLetters: {
        fontSize: 18,
        marginBottom: 10,
    },
    remainingAttempts: {
        fontSize: 18,
        marginBottom: 10,
    },
    keyboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    winMessage: {
        fontSize: 24,
        color: 'green',
        fontWeight: 'bold',
    },
    loseMessage: {
        fontSize: 24,
        color: 'red',
        fontWeight: 'bold',
    },
});  