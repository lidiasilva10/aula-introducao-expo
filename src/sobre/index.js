import { View, Text, Image, ImageBackground } from 'react-native'; 
import styles from './styles';

import imagem from '../../assets/react.png'; 

function Sobre () {
    return(
        <View style={styles.container}>
            <ImageBackground source={imagem}
            resizeMode="comtain"
            imageStyle= {{opacity: 0.5}}
            style={styles.image}
            >
                <Text style={styles.titulo}>Sobre</Text>
                <Text styles={styles.texto}> Aula de React Native</Text>
                <Text styles={styles.texto}> Exemplos e Atividades</Text>
                </ImageBackground>    
            </View>
    );
}

export default Sobre;