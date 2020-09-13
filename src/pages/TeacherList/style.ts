import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7'
    },

    teacherList: {
        marginTop: -40
    },

    searchForm: {
        marginBottom: 24
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    filterButton: {
        height: 46,
        width: 46,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        height: 54,
        backgroundColor: '#f0f0f7',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    submitButton: {
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#04BF58',
        marginTop: 4,
    },

    submitButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#f0f0f7',
    },
})

export default style