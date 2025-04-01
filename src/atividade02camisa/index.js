import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Card from './card';

import img1 from '../../assets/camisaBranca.png';
import img2 from '../../assets/camisaPreta.png';
import img3 from '../../assets/camisaListrada.png';
import img4 from '../../assets/camisaBordo.png';


function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Card titulo={'Camisa Branca e Preta'} img={img1} valor={'R$99,90'}>Camisa com listras</Card>
            <Card titulo={'Camisa Preta'} img={img2} valor={'R$105,70'}>Camisa Preta.</Card>
            <Card titulo={'Camisa Listrada'} img={img3} valor={'R$244,00'}>Camisa com listras/clássico</Card>
            <Card titulo={'Camisa São Jorge'} img={img4} valor={'R$285,80'}>Camisa de Time Vinho</Card>
        </View>
    );
}

export default Atividade2;

