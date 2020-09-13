import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1, // diz para o objeto ocupar todo espaço disponivel possivel na tela
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: '#FDFDFD',
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },

    description: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        marginTop: 24,
        lineHeight: 28,
        maxWidth: 240
    },

    okButton: {
        backgroundColor: '#04D361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        borderRadius: 8
        
    },

    okButtonText: {
        color: '#FDFDFD',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }
})

export default style