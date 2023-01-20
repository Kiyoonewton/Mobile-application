import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react';

import Fontisto from 'react-native-vector-icons/Fontisto'
import TextInputComponent from './../../components/textInputComponent';

import { styles } from './styles';

const Materials = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity style={styles.backBtnInner}>
        <Fontisto name='arrow-left-l' color="#00d9b6" size={30} onPress={() => navigation.goBack()}/>
        <Text style={styles.textColor}>Parent Materials</Text>
      </TouchableOpacity>
      <View style={styles.inputWrapper}>
        <TextInputComponent inputValue="JSS Two"/>
        <TextInputComponent inputValue="Select Subject"/>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.innerTextColor}>Select a class and subject to see Materials</Text>
        <Text style={styles.innerTextColor}>Available for your children's classes</Text>
      </View>
    </SafeAreaView>
  )
}

export default Materials