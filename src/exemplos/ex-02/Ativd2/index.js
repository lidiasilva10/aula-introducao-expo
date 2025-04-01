import { View, Text, Image, ScrollView } from 'react-native'; 

import styles from './styles'; 

import img from '../../../assets/002-1-react-native.png';

import Mensagem from './mensagem';

function Atividade2 () {
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
 
            <Mensagem titulo={'ERRO'}>Você não clicou corretamente blablabla!
            <Image source={img} style={styles.imagem} />
            </Mensagem>

            <Mensagem titulo={'SUCESSO'}>Acesso permitido
            <Image source={img} style={styles.imagem} />
            </Mensagem>

            <Mensagem titulo={'AVISO'}>O tempo acabou!
            <Image source={img} style={styles.imagem} />
            </Mensagem>
        </View>
        </ScrollView>
    );
}

export default Atividade2;