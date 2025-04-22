import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffff',
        padding:8,
        flex: 1,
        alignItems: 'center',
    },
   TxtSaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
   },
   TxtEntrada:{
    borderWidth: 4,
    textAlign: 'center',
    fontSize: 22,
    borderColor: '#E91E63',
    height: 40,
    color: '#E53935',
    borderRadius: 10,
    marginTop: 10,
   },
   button: {
    backgroundColor: '#E91E63',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    margintTop: 20,
   },
    txtButton: {
    fontSize:22,
    color: '#FF80AB',
    textAlign: 'center',
    },

    textLabal: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#C51162',
    },
});

export default styles;