import {FontAwesome5, Ionicons, MaterialIcons} from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from '../components'
import React from 'react'

const Inicio = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Convertidor de unidades</Text>
            <View style={styles.container}>
                <Button 
                    title="Temperatura"
                    icon={<FontAwesome5 name="temperature-low" size={24} color="white" />}
                    onPress={()=>{navigation.navigate('Temperatura')}
                }/>
                <Button
                    title="Longitud"
                    icon={<FontAwesome5 name="ruler" size={24} color="white" />}
                    onPress={()=>{navigation.navigate('Longitud')}
                }/>
                <Button
                    title="Peso y masa"
                    icon={<FontAwesome5 name="weight-hanging" size={24} color="white" />}
                    onPress={()=>{navigation.navigate('Peso y masa')}
                }/>
                <Button
                    title="Velocidad"
                    icon={<MaterialIcons  name="speed" size={24} color="white" />}
                    onPress={()=>{navigation.navigate('Velocidad')}
                }/>
                <Button 
                    title="Tiempo"
                    icon={<Ionicons name="time-outline" size={24} color="white" />}
                    onPress={()=>{navigation.navigate('Tiempo')}
                }/>
                <Button
                    title="Datos"
                    icon={<FontAwesome5 name="memory" size={24} color="white" />}
                    onPress={()=>{navigation.navigate('Datos')}
                }/>
            </View>
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
    },
    container: {
        width: '100%',
        paddingHorizontal: 20,
    },
})