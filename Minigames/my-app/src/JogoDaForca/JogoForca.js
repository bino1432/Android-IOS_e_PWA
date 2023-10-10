import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image }
  from 'react-native';
  
  export default function JogoForca ({ changeScreen, palavra, setPalavra }) {
    const [tentativa, setTentativa] = useState('');
    const [erros, setErros] = useState(0);

    const palavraInicial = palavra.split("").map((letra) => {
        return letra === " " ? " " : " _ ";
    });
    const [palavraAparece, setPalavraAparece] = useState(palavraInicial);
    const [palavraAdivinha, setPalavraAdivinha] = useState("");
    const [letrasChutadas, setletrasChutadas] = useState([]);

    const [vidas, setVidas] = useState(0);
    const [vidasRestantes, setVidasRestantes] = useState(6);

    const voltar = () => {
        setPalavra(palavra);
        changeScreen("EscolhaPalavra");
    }

    useEffect(() => {
        if (palavraAparece.join("").toUpperCase() === palavra.toUpperCase()) {
            setTimeout(() => {
                alert(`Você Ganhou\nA palavra era: ${palavraAparece.join("")}`);
                voltar();
            }, 10);
        }
        let vidasTmp = vidas;
        if (vidasTmp == 6) {
            setTimeout(() => {
                alert("Você Perdeu")
                changeScreen("EscolhaPalavra")
            }, 10);
        }
    }, [palavraAparece, vidas]);

    const VerificarLetra = () => {
        let vidastmp = vidas;
        let contVidasRestantes = vidasRestantes;
        if (palavraAdivinha.length >= 1 && palavraAdivinha.match('[A-z]+')) {
            if (palavraAdivinha.toUpperCase() === palavra.toUpperCase()) {
                alert(`Parabéns!\nA palavra era: ${palavra}`);
                voltar();
            } else if (palavraAdivinha.length == palavra.length) {
                setVidas(++vidastmp);
                setVidasRestantes(--contVidasRestantes);
            } else {
                const letrasChutadasTmp = [...letrasChutadas];
                if (!(letrasChutadasTmp.includes(`${palavraAdivinha.toUpperCase().charAt(0)} `))) {
                    letrasChutadasTmp.push(`${palavraAdivinha.toUpperCase().charAt(0)} `);
                    setletrasChutadas(letrasChutadasTmp);
                    let palavraTmp = palavra.toUpperCase().split("")
                    
                    palavraTmp = palavraTmp.map((letra) => {
                        return letra != " " ? letra : "";
                    });

                    palavraTmp = palavraTmp.map((letra) => {
                        return letra === palavraAdivinha.toUpperCase().charAt(0);
                    });

                    const palavraApareceTmp = [...palavraAparece];
                    let contTem = 0;

                    palavraTmp.map((letra, index) => {
                        if (letra) {
                            palavraApareceTmp[index] = palavraAdivinha.toUpperCase().charAt(0);
                            contTem++;
                        }
                    });

                    if (contTem === 0) {
                        setVidas(++vidastmp);
                        setVidasRestantes(--contVidasRestantes);
                    }

                    setPalavraAparece(palavraApareceTmp);
                }

            }
        } else {
            alert("Deve conter pelo menos uma letra e apenas letras!")
        }
        setPalavraAdivinha("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text} >Vidas Restantes: {vidasRestantes}</Text>
            <Text>{palavraAparece}</Text>
            <Text>Letras Usadas: {letrasChutadas}</Text>

            <TextInput placeholder='Digite a letra ou palavra' value={palavraAdivinha} onChangeText={setPalavraAdivinha} style={styles.input} id="abcde" />

            <Button title="Acertar" onPress={VerificarLetra} />
            <Button title="Voltar" onPress={voltar} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        color: 'black',
    },
    text: {
        fontSize: 20
    }
});