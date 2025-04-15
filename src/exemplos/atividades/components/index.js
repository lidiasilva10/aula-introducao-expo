import * as React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import styles from '../../ex-4/styles';

export default function Index() {

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 4
            </Text>
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