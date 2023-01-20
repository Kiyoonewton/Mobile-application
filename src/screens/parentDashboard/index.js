import React, {useState} from 'react'
import { 
    View, 
    Text,
    Dimensions,
    SafeAreaView, 
    TouchableOpacity, 
    ScrollView 
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import DatePickerComponent from '../../components/datePickerComponent/DatePickerComponent';

import DropdownComponent from "../../components/dropDown";
import { styles } from './styles';


const Parent = ({navigation}) => {
  const [date, setDate] = useState(new Date())

  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.innerheader}>
          <TouchableOpacity onPress={() => navigation.navigate("AddChild")}>
          <Text style={styles.textColor}>Add My Child</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.textColor}>Share App</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Welcome John Doe</Text>
        <View style={styles.floatHeader}>
          <View style={styles.leftBox}>
            <Text style={styles.textColor}>Number of Children</Text>
            <Text style={styles.textColor}>02</Text>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.textColor}>Number of classes</Text>
            <Text style={styles.textColor}>Registered</Text>
            <Text style={styles.textColor}>02</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
       <ScrollView>
       <View style={styles.innerfooter}>
          <Text style={styles.innerfooterText}>My Child(ren)</Text>
          <Text style={styles.textColor}>
            Select child(ren)'s name to view their performance over time
          </Text>
          <DropdownComponent />
          <DropdownComponent />
          <DatePickerComponent />
          <DatePickerComponent />
          <TouchableOpacity style={styles.generateBtn}>
            <Text style={styles.generateText}>Generate Performance</Text>
          </TouchableOpacity>
       </View>
       </ScrollView>
      </View>
   </View>
  )
}

export default Parent