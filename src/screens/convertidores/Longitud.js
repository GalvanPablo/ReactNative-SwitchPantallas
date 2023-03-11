import { Input, ListadoResultados } from '../../components'
import { Keyboard, StyleSheet, View } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

const Longitud = () => {

    const [valor, setValor] = React.useState('')
    const [valores, setValores] = React.useState([])

    // Manejo del dropdown
    const [open, setOpen] = React.useState(false);
    const [unidad, setUnidad] = React.useState("celcius");
    const [items, setItems] = React.useState([
        {label: 'Nanómetros', value: 'Nanómetros'},
        {label: 'Micrómetros', value: 'Micrómetros'},
        {label: 'Milímetros', value: 'Milímetros'},
        {label: 'Centímetros', value: 'Centímetros'},
        {label: 'Metros', value: 'Metros'},
        {label: 'Kilómetros', value: 'Kilómetros'},
        {label: 'Pulgadas', value: 'Pulgadas'},
        {label: 'Pies', value: 'Pies'},
        {label: 'Yardas', value: 'Yardas'},
        {label: 'Millas', value: 'Millas'},
        {label: 'Millas Nauticas', value: 'Millas Nauticas'},
    ]);

    const handleInput = (value) => {
        setValor(value)
    }

    const calcValues = () => {
        const value = parseFloat(valor)
        switch (unidad) {
            case 'Nanómetros':
                setValores([
                    {unidad: 'Micrómetros', valor: value / 1000},
                    {unidad: 'Milímetros', valor: value / 1000000},
                    {unidad: 'Centímetros', valor: value / 10000000},
                    {unidad: 'Metros', valor: value / 1000000000},
                    {unidad: 'Kilómetros', valor: value / 1000000000000},
                    {unidad: 'Pulgadas', valor: value / 25400000},
                    {unidad: 'Pies', valor: value / 304800000},
                    {unidad: 'Yardas', valor: value / 914400000},
                    {unidad: 'Millas', valor: value / 1609344000000},
                    {unidad: 'Millas Nauticas', valor: value / 1852000000000},
                ])
                break;
            case 'Micrómetros':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 1000},
                    {unidad: 'Milímetros', valor: value / 1000},
                    {unidad: 'Centímetros', valor: value / 10000},
                    {unidad: 'Metros', valor: value / 1000000},
                    {unidad: 'Kilómetros', valor: value / 1000000000},
                    {unidad: 'Pulgadas', valor: value / 25400},
                    {unidad: 'Pies', valor: value / 304800},
                    {unidad: 'Yardas', valor: value / 914400},
                    {unidad: 'Millas', valor: value / 1609344000},
                    {unidad: 'Millas Nauticas', valor: value / 1852000000},
                ])
                break;
            case 'Milímetros':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 1000000},
                    {unidad: 'Micrómetros', valor: value * 1000},
                    {unidad: 'Centímetros', valor: value / 10},
                    {unidad: 'Metros', valor: value / 1000},
                    {unidad: 'Kilómetros', valor: value / 1000000},
                    {unidad: 'Pulgadas', valor: value / 25.4},
                    {unidad: 'Pies', valor: value / 304.8},
                    {unidad: 'Yardas', valor: value / 914.4},
                    {unidad: 'Millas', valor: value / 1609344},
                    {unidad: 'Millas Nauticas', valor: value / 1852000},
                ])
                break;
            case 'Centímetros':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 10000000},
                    {unidad: 'Micrómetros', valor: value * 10000},
                    {unidad: 'Milímetros', valor: value * 10},
                    {unidad: 'Metros', valor: value / 100},
                    {unidad: 'Kilómetros', valor: value / 100000},
                    {unidad: 'Pulgadas', valor: value / 2.54},
                    {unidad: 'Pies', valor: value / 30.48},
                    {unidad: 'Yardas', valor: value / 91.44},
                    {unidad: 'Millas', valor: value / 160934.4},
                    {unidad: 'Millas Nauticas', valor: value / 185200},
                ])
                break;
            case 'Metros':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 1000000000},
                    {unidad: 'Micrómetros', valor: value * 1000000},
                    {unidad: 'Milímetros', valor: value * 1000},
                    {unidad: 'Centímetros', valor: value * 100},
                    {unidad: 'Kilómetros', valor: value / 1000},
                    {unidad: 'Pulgadas', valor: value * 39.3701},
                    {unidad: 'Pies', valor: value * 3.28084},
                    {unidad: 'Yardas', valor: value * 1.09361},
                    {unidad: 'Millas', valor: value / 1609.34},
                    {unidad: 'Millas Nauticas', valor: value / 1852},
                ])
                break;
            case 'Kilómetros':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 1000000000000},
                    {unidad: 'Micrómetros', valor: value * 1000000000},
                    {unidad: 'Milímetros', valor: value * 1000000},
                    {unidad: 'Centímetros', valor: value * 100000},
                    {unidad: 'Metros', valor: value * 1000},
                    {unidad: 'Pulgadas', valor: value * 39370.1},
                    {unidad: 'Pies', valor: value * 3280.84},
                    {unidad: 'Yardas', valor: value * 1093.61},
                    {unidad: 'Millas', valor: value * 0.621371},
                    {unidad: 'Millas Nauticas', valor: value / 1.852},
                ])
                break;
            case 'Pulgadas':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 25400000},
                    {unidad: 'Micrómetros', valor: value * 25400},
                    {unidad: 'Milímetros', valor: value * 25.4},
                    {unidad: 'Centímetros', valor: value * 2.54},
                    {unidad: 'Metros', valor: value / 39.3701},
                    {unidad: 'Kilómetros', valor: value / 39370.1},
                    {unidad: 'Pies', valor: value / 12},
                    {unidad: 'Yardas', valor: value / 36},
                    {unidad: 'Millas', valor: value / 63360},
                    {unidad: 'Millas Nauticas', valor: value / 72913.4},
                ])
                break;
            case 'Pies':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 304800000},
                    {unidad: 'Micrómetros', valor: value * 304800},
                    {unidad: 'Milímetros', valor: value * 304.8},
                    {unidad: 'Centímetros', valor: value * 30.48},
                    {unidad: 'Metros', valor: value / 3.28084},
                    {unidad: 'Kilómetros', valor: value / 3280.84},
                    {unidad: 'Pulgadas', valor: value * 12},
                    {unidad: 'Yardas', valor: value / 3},
                    {unidad: 'Millas', valor: value / 5280},
                    {unidad: 'Millas Nauticas', valor: value / 6076.12},
                ])
                break;
            case 'Yardas':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 914400000},
                    {unidad: 'Micrómetros', valor: value * 914400},
                    {unidad: 'Milímetros', valor: value * 914.4},
                    {unidad: 'Centímetros', valor: value * 91.44},
                    {unidad: 'Metros', valor: value / 1.09361},
                    {unidad: 'Kilómetros', valor: value / 1093.61},
                    {unidad: 'Pulgadas', valor: value * 36},
                    {unidad: 'Pies', valor: value * 3},
                    {unidad: 'Millas', valor: value / 1760},
                    {unidad: 'Millas Nauticas', valor: value / 2025.37},
                ])
                break;
            case 'Millas':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 1609344000000},
                    {unidad: 'Micrómetros', valor: value * 1609344000},
                    {unidad: 'Milímetros', valor: value * 1609344},
                    {unidad: 'Centímetros', valor: value * 160934.4},
                    {unidad: 'Metros', valor: value * 1609.34},
                    {unidad: 'Kilómetros', valor: value * 1.60934},
                    {unidad: 'Pulgadas', valor: value * 63360},
                    {unidad: 'Pies', valor: value * 5280},
                    {unidad: 'Yardas', valor: value * 1760},
                    {unidad: 'Millas Nauticas', valor: value / 1.15078},
                ])
                break;
            case 'Millas Nauticas':
                setValores([
                    {unidad: 'Nanómetros', valor: value * 1852000000000},
                    {unidad: 'Micrómetros', valor: value * 1852000000},
                    {unidad: 'Milímetros', valor: value * 1852000},
                    {unidad: 'Centímetros', valor: value * 185200},
                    {unidad: 'Metros', valor: value * 1852},
                    {unidad: 'Kilómetros', valor: value * 1.852},
                    {unidad: 'Pulgadas', valor: value * 72913.4},
                    {unidad: 'Pies', valor: value * 6076.12},
                    {unidad: 'Yardas', valor: value * 2025.37},
                    {unidad: 'Millas', valor: value * 1.15078},
                ])
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
                        maxHeight={450}
                    />
                </View>

                <ListadoResultados valores={valores} decimales={3}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Longitud

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