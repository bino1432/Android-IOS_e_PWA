import { useEffect, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

let variavel = 0;
export default function exemplo() {
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    useEffect(() => {
        console.log("Alterou valor de contador")
    }, [contador1])

    useEffect(() => {
        console.log("Alterou valor de contador2")
    }, [contador2])

    const array = useMemo(() => {
        console.log("Passou pelo use Memo")
        const itens = [...Array(contador1)]
        return (
            <View>
                {
                    itens.map((item, i) => {
                        console.log("Passou dentro do map, index", i)
                        return (
                            <View key={i}>
                                <Text>
                                    Item {i + 1}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }, [contador1]);

    console.log("Antes do return")
    return (
        <View style={styles.container}>
            <Text>
                contador1: {contador1}
            </Text>
            <Button title='Click1' onPress={() => setContador1(contador1 + 1)} />

            <Text>
                contador2: {contador2}
            </Text>
            <Button title='Click2' onPress={() => setContador2(contador2 + 1)} />

            {array}

            <Text>
                variavel: {variavel}
            </Text>
            <Button title='Click3' onPress={() => variavel++} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        
    }
})