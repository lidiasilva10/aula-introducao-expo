import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';



// Exemplos
 import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-4';
//import Exemplo5 from './src/exemplos/ex-05';
import Exemplo6 from './src/exemplos/ex-06';
import Exemplo8 from './src/exemplos/ex-8';


// Atividades
import Atividade2 from './src/atividades/atividade-2';
import Atividade3 from './src/atividades/atividade-03';
import Atividade4 from './src/atividades/atividade-04';






export default function App() {
  return (
      <View style={styles.container}>
       <Exemplo8/>
       <StatusBar style="light"/>
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