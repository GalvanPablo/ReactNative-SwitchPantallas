import { Input, ListadoResultados } from '../../components'
import { Keyboard, StyleSheet, View } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

const Velocidad = () => {

    const [valor, setValor] = React.useState('')
    const [valores, setValores] = React.useState([])

    // Manejo del dropdown
    const [open, setOpen] = React.useState(false);
    const [unidad, setUnidad] = React.useState("celcius");
    const [items, setItems] = React.useState([
        {label: 'Metros por segundo', value: 'Metros por segundo'},
        {label: 'Kilómetros por hora', value: 'Kilómetros por hora'},
        {label: 'Pies por segundo', value: 'Pies por segundo'},
        {label: 'Millas por hora', value: 'Millas por hora'},
        {label: 'Nudos', value: 'Nudos'},
        {label: 'Mach', value: 'Mach'}
    ]);

    const handleInput = (value) => {
        setValor(value)
    }

    const calcValues = () => {
        switch (unidad) {
            case 'Metros por segundo':
                setValores([
                    {unidad: 'Kilómetros por hora', valor: valor * 3.6},
                    {unidad: 'Pies por segundo', valor: valor * 3.28084},
                    {unidad: 'Millas por hora', valor: valor * 2.23694},
                    {unidad: 'Nudos', valor: valor * 1.94384},
                    {unidad: 'Mach', valor: valor * 0.0029386},
                ])
                break;
            case 'Kilómetros por hora':
                setValores([
                    {unidad: 'Metros por segundo', valor: valor / 3.6},
                    {unidad: 'Pies por segundo', valor: valor * 0.911344},
                    {unidad: 'Millas por hora', valor: valor * 0.621371},
                    {unidad: 'Nudos', valor: valor * 0.539957},
                    {unidad: 'Mach', valor: valor * 0.000816},
                ])
                break;
            case 'Pies por segundo':
                setValores([
                    {unidad: 'Metros por segundo', valor: valor / 3.28084},
                    {unidad: 'Kilómetros por hora', valor: valor / 0.911344},
                    {unidad: 'Millas por hora', valor: valor * 0.681818},
                    {unidad: 'Nudos', valor: valor * 0.592484},
                    {unidad: 'Mach', valor: valor * 0.000737},
                ])
                break;
            case 'Millas por hora':
                setValores([
                    {unidad: 'Metros por segundo', valor: valor / 2.23694},
                    {unidad: 'Kilómetros por hora', valor: valor / 0.621371},
                    {unidad: 'Pies por segundo', valor: valor / 0.681818},
                    {unidad: 'Nudos', valor: valor * 0.868976},
                    {unidad: 'Mach', valor: valor * 0.000001},
                ])
                break;
            case 'Nudos':
                setValores([
                    {unidad: 'Metros por segundo', valor: valor / 1.94384},
                    {unidad: 'Kilómetros por hora', valor: valor / 0.539957},
                    {unidad: 'Pies por segundo', valor: valor / 0.592484},
                    {unidad: 'Millas por hora', valor: valor / 0.868976},
                    {unidad: 'Mach', valor: valor * 0.000001},
                ])
                break;
            case 'Mach':
                setValores([
                    {unidad: 'Metros por segundo', valor: valor / 0.0029386},
                    {unidad: 'Kilómetros por hora', valor: valor / 0.000816},
                    {unidad: 'Pies por segundo', valor: valor / 0.000737},
                    {unidad: 'Millas por hora', valor: valor / 0.000001},
                    {unidad: 'Nudos', valor: valor / 0.000001},
                ])
                break;
            default:
                break;
        }
    }

    React.useEffect(() => {
        calcValues()
    }, [valor, unidad])

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

export default Velocidad

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