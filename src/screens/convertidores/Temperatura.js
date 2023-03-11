import { Input, ListadoResultados } from '../../components'
import { Keyboard, StyleSheet, View } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

const Temperatura = () => {

    const [valor, setValor] = React.useState('')
    const [valores, setValores] = React.useState([
        {unidad: 'Celcius', valor: 0, visible: false},
        {unidad: 'Fahrenheit', valor: 0, visible: false},
        {unidad: 'Kelvin', valor: 0, visible: false},
    ])

    // Manejo del dropdown
    const [open, setOpen] = React.useState(false);
    const [unidad, setUnidad] = React.useState("celcius");
    const [items, setItems] = React.useState([
        {label: 'Celcius', value: 'Celcius'},
        {label: 'Fahrenheit', value: 'Fahrenheit'},
        {label: 'Kelvin', value: 'Kelvin'},
    ]);

    const handleInput = (value) => {
        setValor(value)
    }

    const calcValues = () => {
        const value = parseFloat(valor)
        switch (unidad) {
            case 'Celcius':
                setValores([
                    {unidad: 'Celcius', valor: value, visible: false},
                    {unidad: 'Fahrenheit', valor: value * 1.8 + 32, visible: true},
                    {unidad: 'Kelvin', valor: value + 273.15, visible: true},
                ])
                break;
            case 'Fahrenheit':
                setValores([
                    {unidad: 'Celcius', valor: (value - 32) / 1.8, visible: true},
                    {unidad: 'Fahrenheit', valor: value, visible: false},
                    {unidad: 'Kelvin', valor: (value - 32) / 1.8 + 273.15, visible: true},
                ])
                break;
            case 'Kelvin':
                setValores([
                    {unidad: 'Celcius', valor: value - 273.15, visible: true},
                    {unidad: 'Fahrenheit', valor: (value - 273.15) * 1.8 + 32, visible: true},
                    {unidad: 'Kelvin', valor: value, visible: false},
                ])
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        calcValues()
    }, [unidad, valor])


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={handleInput}
                        value={valor}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                    <DropDownPicker
                        open={open}
                        value={unidad}
                        items={items}
                        setOpen={setOpen}
                        setValue={setUnidad}
                        setItems={setItems}
                        style={styles.dropdown}
                        containerStyle={styles.dropdownContainer}
                        placeholder="Seleccione una unidad"
                    />
                </View>

                <ListadoResultados valores={valores} sufijo={" º" + unidad[0]} />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Temperatura

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    input: {
        width: '30%',
    },
    dropdownContainer: {
        width: '60%',
    },
    dropdown: {
        backgroundColor: '#fafafa',
    },
})