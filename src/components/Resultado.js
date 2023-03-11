import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Resultado = ({valor, unidad, sufijo, decimales = 2}) => {
    return (
        <View style={styles.resultado}>
            <Text style={styles.unidad}>{unidad}</Text>
            <Text style={styles.valor}>
                {parseFloat(valor) === NaN ? '-' : valor.toFixed(decimales) + sufijo}
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
        fontWeight: 'bold',
    },
    valor: {
        fontSize: 18,
    }
})