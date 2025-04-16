import { useState  } from 'react';
import {View, Text, TextInput, TouchableOpacity, Button } from 'react-native';


const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffff',
        padding:8,
        flex: 1,
        alignItems: 'center',
        
    },
    
    txtSaida:{
        margin: 24,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E53935',
    },

    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#B71C1C',
        height: 40,
        color: '#E53935',
        borderRadius: 10,
    },
 Button: {
    backgroundColor: '#E53935',
    height: 40,
    JustifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
 }

});

export default styles;