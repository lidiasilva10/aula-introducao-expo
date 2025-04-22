import * as React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';


// Exemplos
 import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-4';
import Exemplo5 from './src/exemplos/ex-05';

// Atividades
//  import Atividade1 from './src/atividades/atividade-1';
 import Atividade2 from './src/atividades/atividade-2';
//import Atividade3 from './src/atividades/atividade-3';
//import Atividade4 from './src/atividades/atividade-4';


export default function App() {

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
        <View>
          <Text style={{ color: 'white' }}>Exemplo5</Text>
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B71C1C',
    // alignItems: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});