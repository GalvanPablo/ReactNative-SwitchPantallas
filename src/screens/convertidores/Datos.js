import { Input, ListadoResultados } from '../../components'
import { Keyboard, StyleSheet, View } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

const Datos = () => {

    const [valor, setValor] = React.useState('')
    const [valores, setValores] = React.useState([])

    // Manejo del dropdown
    const [open, setOpen] = React.useState(false);
    const [unidad, setUnidad] = React.useState("celcius");
    const [items, setItems] = React.useState([
        {label: 'Bits', value: 'Bits'},
        {label: 'Bytes', value: 'Bytes'},
        {label: 'Kilobytes', value: 'Kilobytes'},
        {label: 'Megabytes', value: 'Megabytes'},
        {label: 'Gigabytes', value: 'Gigabytes'},
        {label: 'Terabytes', value: 'Terabytes'},
    ]);

    const handleInput = (value) => {
        setValor(value)
    }

    const calcValues = () => {
        switch (unidad) {
            case 'Bits':
                setValores([
                    {unidad: 'Bytes', valor: valor / 8},
                    {unidad: 'Kilobytes', valor: valor / 8000},
                    {unidad: 'Megabytes', valor: valor / 8000000},
                    {unidad: 'Gigabytes', valor: valor / 8000000000},
                    {unidad: 'Terabytes', valor: valor / 8000000000000},
                ])
                break;
            case 'Bytes':
                setValores([
                    {unidad: 'Bits', valor: valor * 8},
                    {unidad: 'Kilobytes', valor: valor / 1000},
                    {unidad: 'Megabytes', valor: valor / 1000000},
                    {unidad: 'Gigabytes', valor: valor / 1000000000},
                    {unidad: 'Terabytes', valor: valor / 1000000000000},
                ])
                break;
            case 'Kilobytes':
                setValores([
                    {unidad: 'Bits', valor: valor * 8000},
                    {unidad: 'Bytes', valor: valor * 1000},
                    {unidad: 'Megabytes', valor: valor / 1000},
                    {unidad: 'Gigabytes', valor: valor / 1000000},
                    {unidad: 'Terabytes', valor: valor / 1000000000},
                ])
                break;
            case 'Megabytes':
                setValores([
                    {unidad: 'Bits', valor: valor * 8000000},
                    {unidad: 'Bytes', valor: valor * 1000000},
                    {unidad: 'Kilobytes', valor: valor * 1000},
                    {unidad: 'Gigabytes', valor: valor / 1000},
                    {unidad: 'Terabytes', valor: valor / 1000000},
                ])
                break;
            case 'Gigabytes':
                setValores([
                    {unidad: 'Bits', valor: valor * 8000000000},
                    {unidad: 'Bytes', valor: valor * 1000000000},
                    {unidad: 'Kilobytes', valor: valor * 1000000},
                    {unidad: 'Megabytes', valor: valor * 1000},
                    {unidad: 'Terabytes', valor: valor / 1000},
                ])
                break;
            case 'Terabytes':
                setValores([
                    {unidad: 'Bits', valor: valor * 8000000000000},
                    {unidad: 'Bytes', valor: valor * 1000000000000},
                    {unidad: 'Kilobytes', valor: valor * 1000000000},
                    {unidad: 'Megabytes', valor: valor * 1000000},
                    {unidad: 'Gigabytes', valor: valor * 1000},
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
                        textStyle={{fontFamily: 'Montserrat_400Regular'}}
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

export default Datos

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