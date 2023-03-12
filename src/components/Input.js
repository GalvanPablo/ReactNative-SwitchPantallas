import { StyleSheet, TextInput } from 'react-native'

import React from 'react'

const Input = ({style, ...otherPros}) => {
  return (
    <TextInput style={[styles.input, style]} {...otherPros}/>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        width: 60,
        textAlign: 'center',
        fontSize: 16,
        padding: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontFamily: 'Montserrat_400Regular',
    },
})