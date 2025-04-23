import { StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffff',
        padding:10,
        flex: 1,
       justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 60,
        paddingLeft: 10,
        paddingRight: 10,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
    },
    operadores:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginTop: 20,
        marginBottom: 20,

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
    marginBottom: 10,
    width: '100%',
    alignSelf: 'center',
    shadowColor: '#000',
   },
   button: {
    backgroundColor: '#E91E63',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    margintTop: 20,
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
   },
    txtButton: {
    fontSize: 18,
    color: '#FF80AB',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.5,
    borderRadius: 10,
    padding: 10,
    },

    textLabal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C51162',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        textAlignVertical: 'center'

    },
});

export default styles;