import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#dedede'
    },

    profileInfo: {
        marginLeft: 16,
        maxWidth: 200
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#32264d',
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        color: '#6a6180',
        marginTop: 4,
    },

    bio: {
        marginHorizontal:24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180'
    },

    footer: {
        backgroundColor: '#dfdfdf',
        padding: 20,
        alignItems: 'center',
        marginTop: 20,
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between'
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    favorited: {
        backgroundColor: '#e33d3d'
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    contactButtonText: {
        color: '#f0f0f7',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    }
})

export default style