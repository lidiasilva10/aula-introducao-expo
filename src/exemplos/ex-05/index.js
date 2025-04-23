import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo5 (){

    const [n1, setN1]= useState(0);
    const [n2, setN2]= useState(0);
    const [total, setTotal]= useState(0); 
  
    function Soma() {
      setTotal(parseFloat(n1) + parseFloat(n2));
    }
  
    function Soma() {
     const conta = parseFloat(n1) + parseFloat(n2);
     setTotal(conta.toString());
    
    }
  
    return (
       <View style={styles.container}>
        <Text style={styles.paragraph}> Exemplo 5</Text>

        <Text style={styles.TxtSaida}> Calculadora básica</Text>

        <Text style={styles.textLabal}> 1º número</Text>
        <TextInput style={styles.TxtEntrada} 
        value={n1}
        />

        <Text styles={styles.TxtSaida}>+</Text>
    

        <Text style={styles.textLabal}> 2º número</Text>
        <TextInput 
        style={styles.TxtEntrada}
        onChangeText={(entada)=> setN2(entada)}
        value={n2} 
        />

        <Text style={[styles.TxtSaida, {margin: 0 }]}> = </Text>

        <Text style={styles.textLabal}> Total</Text>
        <TextInput
         style={styles.TxtEntrada} 
         editable={false}
            value={total}
        />
        <View style={styles.operadores}>
        <TouchableOpacity style={styles.button} onPress={() => Soma()}>
            <Text style={styles.txtButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Sub()}>
            <Text style={styles.txtButton}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Mult()}>
            <Text style={styles.txtButton}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Div()}>
            <Text style={styles.txtButton}>/</Text>
        </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.button} onPress={() =>(handerZerar)}>
            <Text style={styles.txtButton}>Zerar</Text>
        </TouchableOpacity>



        </View>




    );
    }

export default Exemplo5;