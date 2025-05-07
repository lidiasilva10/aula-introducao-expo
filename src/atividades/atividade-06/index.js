import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function Index () {
    
    const [massa, setMassa] = useState(0);
const [altura, setAltura] = useState(0);
const [resultado, setResultado] = useState(0);

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>Atividade 6</Text>
            <View styles={styles.entadaImc}>
            <TextInput placeholder='Massa' placeholderTextColor={'lightgray'} keyboardType='numeric'  style={styles.input}/>
            <TextInput placeholder='Altura' placeholderTextColor={'lightgray'} keyboardType='numeric'  style={styles.input}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.paragraph}>Resultado</Text>
            </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#AAA',
    },
});