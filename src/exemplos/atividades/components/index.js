import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import styles from '../../ex-4/styles';

export default function Index() {

    const [textoEscrito, setTextoEscrito] = React.useState('');
    const [mensagem, setMensagem] = React.useState('Texto programado');

    return(
        <View style={styles.container}>
            <Text style={styles.txtSaida}>
               {mensagem} 
            </Text>

        <TextInput
         style={styles.txtEntrada}
        onChangeText={(entrada) => setTextoEscrito(entrada)}
        value={textoEscrito}
        />

        <TouchableOpacity style={styles.button} onPress={() => setMensagem(textoEscrito)}>
            <Text style={styles.txtButton}>Exibir</Text>
        </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#FFCDD2',
        padding: 8,

    },

    paragraph:{
        margin: 24,
        fontSize: 26,
        fontWeigtht: 'bold',
        textAlign: 'center',
        color: '#B71C1C',
    },
});