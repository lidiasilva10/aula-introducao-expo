import { useState  } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo4 (){

    const [txtInserido, setTxtInserido] = useState('');
    const [texExibir, setTxtExibir] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
            <Text style={styles.texto}>{txtInserido}</Text>
            <TextInput
             sttyle= {styles.input}
            onChangeText={(valor)=> setTxtInserido(valor)} 
            />

            <Text style= {styles.titulo}>
                Exemplo envio dados click do botão
            </Text>

            <Text style={styles.texto}>{texExibir}</Text>
            
            <TouchableOpacity
            
             style={styles.botao}

                onPress={()=> setTxtExibir(txtInserido)}
                >
                
                <Text style={styles.txtBotao}>
                    Exibir texto digitado
                    </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Exemplo4;