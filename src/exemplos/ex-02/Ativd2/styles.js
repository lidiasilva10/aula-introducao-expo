import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderRadius: 10,
        padding: 8,
        alignItems: 'center',
    },

    titulo: {
        fontSize: RFPercentage(4),
        fontWeight: 'bold',
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'darkslategrey',
        borderColor: 'darkslategrey',
        borderRadius: 20,
    },

    item: {
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        elevation: 3, // Sombra no Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    imagem: {
        width: '90%',
        height: RFPercentage(20),
        resizeMode: 'contain',
        borderRadius: 10,
    },

    nome: {
        fontSize: RFPercentage(3),
        fontWeight: 'bold',
        marginTop: 5,
        color: '#333',
    },

    preco: {
        fontSize: RFPercentage(2.5),
        color: '#008000',
        marginTop: 5,
        fontWeight: 'bold',
    },
});

export default styles;