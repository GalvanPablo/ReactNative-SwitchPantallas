import { Pressable, StyleSheet, Text } from 'react-native'

import React from 'react'

const Button = ({title, onPress, style, icon}) => {
    return (
        <Pressable
            style={[styles.button, style]}
            onPress={onPress}
        >
            {icon && icon}
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        padding: 10,
        margin: 10,
        borderRadius: 5,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})