import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';



// Exemplos
import Exemplos from './src/exemplos'
import Atividades from './src/atividades';
 import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-4';
//import Exemplo5 from './src/exemplos/ex-05';
import Exemplo6 from './src/exemplos/ex-06';

import Sobre from './src/sobre/index';

// Atividades
import Atividade2 from './src/atividades/atividade-2';
import Atividade3 from './src/atividades/atividade-03';
import Atividade4 from './src/atividades/atividade-04';







export default function App() {
  return (
      <View style={styles.container}>
       <Sobre/>
       <StatusBar style="light"/>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(145, 146, 218)',
    // alignItems: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },
});