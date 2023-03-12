import { Input, ListadoResultados } from '../../components'
import { Keyboard, StyleSheet, View } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native';

const PesoMasa = () => {

    const [valor, setValor] = React.useState('')
    const [valores, setValores] = React.useState([])

    // Manejo del dropdown
    const [open, setOpen] = React.useState(false);
    const [unidad, setUnidad] = React.useState("celcius");
    const [items, setItems] = React.useState([
        {label: 'Gramos', value: 'Gramos'},
        {label: 'Kilogramos', value: 'Kilogramos'},
        {label: 'Toneladas', value: 'Toneladas'},
        {label: 'Libras', value: 'Libras'},
        {label: 'Onzas', value: 'Onzas'},
    ]);

    const handleInput = (value) => {
        setValor(value)
    }

    const calcValues = () => {
        switch (unidad) {
            case 'Gramos':
                setValores([
                    {unidad: 'Kilogramos', valor: valor / 1000},
                    {unidad: 'Toneladas', valor: valor / 1000000},
                    {unidad: 'Libras', valor: valor / 453.592},
                    {unidad: 'Onzas', valor: valor / 28.3495},
                ])
                break;
            case 'Kilogramos':
                setValores([
                    {unidad: 'Gramos', valor: valor * 1000},
                    {unidad: 'Toneladas', valor: valor / 1000},
                    {unidad: 'Libras', valor: valor * 2.20462},
                    {unidad: 'Onzas', valor: valor * 35.274},
                ])
                break;
            case 'Toneladas':
                setValores([
                    {unidad: 'Gramos', valor: valor * 1000000},
                    {unidad: 'Kilogramos', valor: valor * 1000},
                    {unidad: 'Libras', valor: valor * 2204.62},
                    {unidad: 'Onzas', valor: valor * 35274},
                ])
                break;
            case 'Libras':
                setValores([
                    {unidad: 'Gramos', valor: valor * 453.592},
                    {unidad: 'Kilogramos', valor: valor / 2.20462},
                    {unidad: 'Toneladas', valor: valor / 2204.62},
                    {unidad: 'Onzas', valor: valor * 16},
                ])
                break;
            case 'Onzas':
                setValores([
                    {unidad: 'Gramos', valor: valor * 28.3495},
                    {unidad: 'Kilogramos', valor: valor / 35.274},
                    {unidad: 'Toneladas', valor: valor / 35274},
                    {unidad: 'Libras', valor: valor / 16},
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

export default PesoMasa

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