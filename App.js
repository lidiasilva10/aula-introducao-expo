import * as React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';


// Exemplos
 import Exemplo1 from './src/exemplos/ex-01';
import Exemplo2 from './src/exemplos/ex-02';
import Exemplo3 from './src/exemplos/ex-03';
import Exemplo4 from './src/exemplos/ex-4';


// Atividades
//  import Atividade1 from './src/atividades/atividade-1';
 import Atividade2 from './src/atividades/atividade-2';
 import Index from './src/exemplos/atividades/components';
 



export default function App() {
  return (
    <View style={styles.container}>
    <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B71C1C',
    padding: 8,
  },
});