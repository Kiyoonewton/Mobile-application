import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { View, Text } from 'react-native'

import {styles} from './styles'

const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date())
  return (
    <View style={styles.datewrapper}>
     <DatePicker date={date} onDateChange={setDate}
     mode={"date"} androidVariant={'iosClone'} style={{color: "#6B6B6B"}}/>
    </View>
  )
}

export default DatePickerComponent