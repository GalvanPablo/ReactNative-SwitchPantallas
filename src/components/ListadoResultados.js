import { StyleSheet, View } from 'react-native'

import React from 'react'
import Resultado from './Resultado'

const ListadoResultados = ({valores, decimales}) => {
    return (
        <View style={styles.resultados}>
            {valores.map((item, index) => <Resultado valor={item.valor} unidad={item.unidad} decimales={decimales} key={index} />)}
        </View>
    )
}

export default ListadoResultados

const styles = StyleSheet.create({
    resultados: {
        width: '100%',
        paddingHorizontal: 20,
        zIndex: -1,
    },
})