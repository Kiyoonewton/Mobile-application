import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import {styles} from './styles';


const ButtonComponent = ({buttonInput}) => {
  return (
    <TouchableOpacity
    style={styles.customeBtn}
    
   >
       <Text 
       style={styles.customeTextBtn}>
           {buttonInput}
       </Text>
   </TouchableOpacity>
  )
}

export default ButtonComponent