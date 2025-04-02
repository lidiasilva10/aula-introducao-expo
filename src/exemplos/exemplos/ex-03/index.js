import {View, Text, Button } from 'react-native';

import styles from './styles';

function Exemplo3 (){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.texto}>Aula de react-native com Expo</Text>
            <Button
            onPress={() => {}}
            title="Alerta"
            color= "deepskblue"
            acess
            />
        </View>
    );
}

export default Exemplo3;