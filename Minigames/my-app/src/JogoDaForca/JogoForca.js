import { useEffect, useState } from "react"
import { View, Button, Text, TextInput, StyleSheet } from "react-native"

export default function JogoForca({
    changeScreen,
    Forca
}) {

    const [palavra, setPalavra] = useState(Forca)
    const [palavraEscondida, setPalavraEscondida] = useState(palavra.leght)
    const [letras, setLetras] = useState([])
    const [vidas, setVidas] = useState(6)

    useEffect(() => {
        setPalavra(palavra.toUpperCase());
    
        for(let cont = 0; cont <= palavra; cont++){
            setPalavraEscondida(palavra[cont].fill('_'));
        }
        
    }, []);

    const voltar = () => {
        changeScreen("EscolhaPalavra")
    }

    const veridicarLetras = (letra) => {
        if (palavra.includes(letra)) {
            const newPalavraEscondida = palavraEscondida.map((char, index) =>
                palavra[index] === letra ? letra : char
            );
            setPalavraEscondida(newPalavraEscondida);
        } else {
            setVidas(vidas - 1);
        }

        setLetras([...letras, letra]);
    };

    const ganhou = palavraEscondida.join('') === palavra;
    const perdeu = vidas === 0;

    return (
        <View style={styles.container}>
            <Text style={styles.word}> {palavraEscondida.join(' ')} </Text>
            <Text style={styles.guessedLetters}>
                Guessed Letters: {letras.join(', ')}
            </Text>
            <Text style={styles.remainingAttempts}>
                Remaining Attempts: {vidas}
            </Text>
            {ganhou && <Text style={styles.winMessage}> You Win! </Text>}
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
            <Button title="Voltar" onPress={voltar} />
            <Text>a palavra é: {palavra}</Text>
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