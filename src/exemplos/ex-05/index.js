import {View, Text, TextInput } from 'react-native';

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

        <text styles={styles.TxtSaida}>+</text>

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

        <TouchableOpacity style={styles.button} onPress={() => Soma()}>
            <Text style={styles.txtButton}> +</Text>
        </TouchableOpacity>

        </View>




    );
    }

export default Exemplo5;