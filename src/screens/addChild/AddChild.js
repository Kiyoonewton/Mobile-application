import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { styles } from './styles';
import BackButton from '../../components/backButton';
import TextInputComponent from './../../components/textInputComponent';
import DropdownComponent from '../../components/dropDown';
import ButtonComponent from '../../components/button';

const AddChild = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.innerheader}>
          <Text style={styles.textColor}>Share App</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.floatHeader}>
        <Text style={styles.textColorInner}>Add My Child</Text>
      </View>
      <View style={styles.footer}>
       <ScrollView>
       <View style={styles.innerfooter}>
          <Text style={styles.innerfooterText}>Register</Text>
          <Text style={styles.textColor}>Register your child as a student on Afrilearn to start enjoying unlimited access to curriculum relevant classnotes and vidoe lessons</Text>
          <TextInputComponent inputValue={"Student"}/>
          <DropdownComponent inputValue="Select Class"/>
          <TextInputComponent inputValue={"Full Name"}/>
          <TextInputComponent inputValue={"Email"}/>
          <TextInputComponent inputValue={"Password"}/>
          <TextInputComponent inputValue={"Confirm Password"}/>
          
          <ButtonComponent buttonInput="Register"/>
       </View>
       
       
       </ScrollView>
      </View>
   </View>
  )
}

export default AddChild