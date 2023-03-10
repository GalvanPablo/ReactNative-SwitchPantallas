import { Datos, Inicio, Longitud, PesoMasa, Temperatura, Tiempo, Velocidad } from '../screens'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteNames="Inicio">
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Temperatura" component={Temperatura} />
                <Stack.Screen name="Longitud" component={Longitud} />
                <Stack.Screen name="Peso y masa" component={PesoMasa} />
                <Stack.Screen name="Velocidad" component={Velocidad} />
                <Stack.Screen name="Tiempo" component={Tiempo} />
                <Stack.Screen name="Datos" component={Datos} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator