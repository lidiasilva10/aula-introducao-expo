import { StyleSheet } from 'react-native'; 
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        padding: 8, 
        flex: 1, 
       // alignItems: 'center', ,
        borderRadius:20,
    }, 
    titulo: {
        fontSize: RFPercentage(3), 
        color: 'rgb(15, 59, 117)', 
        fontWeight: 'bold', 
        borderWidth: 2, 
        borderColor: 'rgb(48, 79, 216)', 
        marginTop: 10, 
        marginBottom: 10, 
        padding: 8, 
        width: '100%', 
        height: 80, 
        textAlign: 'center', 
        textAlignVertical: 'center', 
        borderRadius: 20,
        backgroundColor: 'rgb(200, 205, 226)',
        shadowColor: '#E6E6FA',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,    

    }, 

    texto: {
        fontSize: RFPercentage(2.2), 
        

    },

    image: {
        flex: 1,
        alignItems: 'center',
        // opacidade: 0.5,

    }
});

export default styles;

