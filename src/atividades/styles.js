import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },

    titulo: {
        fontSize: RFValue(24),
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)',
    },

    botao: {
        borderWidth: RFValue(1),
        borderColor: 'rgb(0, 0, 0)',
        borderRadius: RFValue(2),
        padding: RFValue(1),
        width: '80%',
        marginBottom: RFValue(10),
        alignSelf: 'center',
        
    },
})

export default styles;