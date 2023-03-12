import { Input, ListadoResultados } from '../../components'
import { Keyboard, StyleSheet, View } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

const Tiempo = () => {

    const [valor, setValor] = React.useState('')
    const [valores, setValores] = React.useState([])

    // Manejo del dropdown
    const [open, setOpen] = React.useState(false);
    const [unidad, setUnidad] = React.useState("celcius");
    const [items, setItems] = React.useState([
        {label: 'Milisegundos', value: 'Milisegundos'},
        {label: 'Segundos', value: 'Segundos'},
        {label: 'Minutos', value: 'Minutos'},
        {label: 'Horas', value: 'Horas'},
        {label: 'Días', value: 'Días'},
        {label: 'Semanas', value: 'Semanas'},
        {label: 'Años', value: 'Años'},
    ]);

    const calcValues = () => {
        switch (unidad) {
            case 'Milisegundos':
                setValores([
                    {unidad: 'Segundos', valor: valor / 1000},
                    {unidad: 'Minutos', valor: valor / 60000},
                    {unidad: 'Horas', valor: valor / 3600000},
                    {unidad: 'Días', valor: valor / 86400000},
                    {unidad: 'Semanas', valor: valor / 604800000},
                    {unidad: 'Años', valor: valor / 31536000000},
                ])
                break;
            case 'Segundos':
                setValores([
                    {unidad: 'Milisegundos', valor: valor * 1000},
                    {unidad: 'Minutos', valor: valor / 60},
                    {unidad: 'Horas', valor: valor / 3600},
                    {unidad: 'Días', valor: valor / 86400},
                    {unidad: 'Semanas', valor: valor / 604800},
                    {unidad: 'Años', valor: valor / 31536000},
                ])
                break;
            case 'Minutos':
                setValores([
                    {unidad: 'Milisegundos', valor: valor * 60000},
                    {unidad: 'Segundos', valor: valor * 60},
                    {unidad: 'Horas', valor: valor / 60},
                    {unidad: 'Días', valor: valor / 1440},
                    {unidad: 'Semanas', valor: valor / 10080},
                    {unidad: 'Años', valor: valor / 525600},
                ])
                break;
            case 'Horas':
                setValores([
                    {unidad: 'Milisegundos', valor: valor * 3600000},
                    {unidad: 'Segundos', valor: valor * 3600},
                    {unidad: 'Minutos', valor: valor * 60},
                    {unidad: 'Días', valor: valor / 24},
                    {unidad: 'Semanas', valor: valor / 168},
                    {unidad: 'Años', valor: valor / 8760},
                ])
                break;
            case 'Días':
                setValores([
                    {unidad: 'Milisegundos', valor: valor * 86400000},
                    {unidad: 'Segundos', valor: valor * 86400},
                    {unidad: 'Minutos', valor: valor * 1440},
                    {unidad: 'Horas', valor: valor * 24},
                    {unidad: 'Semanas', valor: valor / 7},
                    {unidad: 'Años', valor: valor / 365},
                ])
                break;
            case 'Semanas':
                setValores([
                    {unidad: 'Milisegundos', valor: valor * 604800000},
                    {unidad: 'Segundos', valor: valor * 604800},
                    {unidad: 'Minutos', valor: valor * 10080},
                    {unidad: 'Horas', valor: valor * 168},
                    {unidad: 'Días', valor: valor * 7},
                    {unidad: 'Años', valor: valor / 52},
                ])
                break;
            case 'Años':
                setValores([
                    {unidad: 'Milisegundos', valor: valor * 31536000000},
                    {unidad: 'Segundos', valor: valor * 31536000},
                    {unidad: 'Minutos', valor: valor * 525600},
                    {unidad: 'Horas', valor: valor * 8760},
                    {unidad: 'Días', valor: valor * 365},
                    {unidad: 'Semanas', valor: valor * 52},
                ])
                break;
            default:
                break;
        }
    }

    const handleInput = (value) => {
        setValor(value)
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

export default Tiempo

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