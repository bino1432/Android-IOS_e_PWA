import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button }
  from 'react-native';
  
  export default function JogoForca ({ changeScreen, palavra, setPalavra }) {

    const palavraCerta = palavra.split("").map((letra) => {
        return letra === " " ? " " : " _ ";
    });
    
    const [palavraEscondida, setPalavraEscondida] = useState(palavraCerta);
    const [tentarLetra, setTentarLetra] = useState("");
    const [letrasChutadas, setletrasChutadas] = useState([]);
    const [vidasRestantes, setVidasRestantes] = useState(6);

    const voltar = () => {
        setPalavra("")
        changeScreen("EscolhaPalavra");
    }

    useEffect(() => {
        if (palavraEscondida.join("").toUpperCase() === palavra.toUpperCase()) {
            setTimeout(() => {
                alert(`Você Ganhou\nA palavra era: ${palavraEscondida.join("")}`);
                voltar();
            }, 10);
        }
        let verificarVidas = vidasRestantes;
        if (verificarVidas == 0) {
            setTimeout(() => {
                alert("Você Perdeu")
                changeScreen("EscolhaPalavra")
            }, 10);
        }
    }, [palavraEscondida, vidasRestantes]);

    const VerificarLetra = () => {
        let contVidasRestantes = vidasRestantes;
        if (tentarLetra.length >= 1 && tentarLetra.match('[A-z]+')) {
            if (tentarLetra.toUpperCase() === palavra.toUpperCase()) {
                alert(`Você Ganhou \nA palavra era: ${palavra}`);
                voltar();
            } else if (tentarLetra.length == palavra.length) {
                setVidasRestantes(--contVidasRestantes);
            } else {
                const atualizarLetrasChutadas = [...letrasChutadas];
                if (!(atualizarLetrasChutadas.includes(`${tentarLetra.toUpperCase().charAt(0)} `))) {
                    atualizarLetrasChutadas.push(`${tentarLetra.toUpperCase().charAt(0)} `);
                    setletrasChutadas(atualizarLetrasChutadas);
                    let verificarPalavra = palavra.toUpperCase().split("")
                    
                    verificarPalavra = verificarPalavra.map((letra) => {
                        return letra != " " ? letra : "";
                    });

                    verificarPalavra = verificarPalavra.map((letra) => {
                        return letra === tentarLetra.toUpperCase().charAt(0);
                    });

                    const verificarPalavraEscondida = [...palavraEscondida];
                    let cont = 0;

                    verificarPalavra.map((letra, index) => {
                        if (letra) {
                            verificarPalavraEscondida[index] = tentarLetra.toUpperCase().charAt(0);
                            cont++;
                        }
                    });

                    if (cont === 0) {
                        setVidasRestantes(--contVidasRestantes);
                    }

                    setPalavraEscondida(verificarPalavraEscondida);
                }

            }
        } else {
            alert("Você deve inserir pelo menos uma letra \n e DEVE ser uma letra")
        }
        setTentarLetra("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text} >Vidas Restantes: {vidasRestantes}</Text>
            <Text>{palavraEscondida}</Text>
            <Text>Letras Usadas: {letrasChutadas}</Text>

            <TextInput placeholder='Insira uma letra' onChangeText={setTentarLetra} style={styles.input} />

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