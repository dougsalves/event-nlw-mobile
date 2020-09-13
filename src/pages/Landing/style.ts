import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1, // diz para o objeto ocupar todo espaço disponivel possivel na tela
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },
    logoImg: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Poppins_400Regular',
        color:'#F0F0F7',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    button: {
        height: 150,
        width: '48%',
        justifyContent: 'space-between',
        padding: 24,
        borderRadius: 8,
    },
    buttonPrimary: {
        backgroundColor: '#916BEA',
    },
    buttonSecondary: {
        backgroundColor: '#04D361',
    },
    textButton: {
        color: '#F0F0F7',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }
})

export default style