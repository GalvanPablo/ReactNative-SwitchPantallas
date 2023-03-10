import { StyleSheet, Text, View } from 'react-native'

import { Input } from '../../components/index'
import React from 'react'

const Temperatura = () => {
    const [celcius, setCelcius] = React.useState(0)
    const [fahrenheit, setFahrenheit] = React.useState(0)
    const [kelvin, setKelvin] = React.useState(0)

    const handleCelcius = (value) => {
        setCelcius(value)
        setFahrenheit(value * 1.8 + 32)
        setKelvin(value + 273.15)
    }

    const handleFahrenheit = (value) => {
        setFahrenheit(value)
        setCelcius((value - 32) / 1.8)
        setKelvin((value - 32) / 1.8 + 273.15)
    }

    const handleKelvin = (value) => {
        setKelvin(value)
        setCelcius(value - 273.15)
        setFahrenheit((value - 273.15) * 1.8 + 32)
    }

    return (
        <View style={styles.screen}>
            
        </View>
    )
}

export default Temperatura

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
})