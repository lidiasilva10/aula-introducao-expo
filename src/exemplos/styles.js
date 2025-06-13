import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'rgb(234, 226, 243)',
    },

    titulo: {
        fontSize: RFValue(24),
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0)',
        marginBottom: RFValue(20),
    },

    botao: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: RFValue(1),
        borderColor: 'rgb(0, 0, 0)',
        borderRadius: RFValue(6),
        padding: RFValue(5),
        width: '50%',
        marginBottom: RFValue(20),
        alignSelf: 'center',
    },
    textoBotao: {
        fontSize: RFValue(16),
        color: 'rgb(69, 29, 212)',
        textAlign: 'center',
    },
});

export default styles;