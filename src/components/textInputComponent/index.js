import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles'

const TextInputComponent = ({inputValue}) => {
  return (
    <View 
        style={styles.inputWrapper}
        >
            <TextInput 
            placeholder={inputValue}
            />
        </View>
  )
}

export default TextInputComponent