import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Resultado = ({valor, unidad, decimales = 2}) => {
    return (
        <View style={styles.resultado}>
            <Text style={styles.unidad}>{unidad}</Text>
            <Text style={styles.valor}>
                {parseFloat(valor) === NaN ? '-' : valor.toFixed(decimales)}
            </Text>
        </View>
    )
}

export default Resultado

const styles = StyleSheet.create({
    resultado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    unidad: {
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold',
    },
    valor: {
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
    }
})