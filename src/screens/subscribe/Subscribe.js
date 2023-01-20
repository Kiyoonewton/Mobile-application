import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'

import {styles} from './styles';
import SubImage from '../../assets/img/subscribe.svg'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropdownComponent from './../../components/dropDown/index';
import ButtonComponent from '../../components/button';

const Subscribe = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
    <TouchableOpacity style={styles.backBtnInner}>
      <Fontisto name='arrow-left-l' color="#00d9b6" size={30} onPress={() => navigation.goBack()}/>
      <Text style={styles.textColor}>Subscribe</Text>
    </TouchableOpacity>
    <ScrollView>
    
      <SubImage width={350} height={250} />
    
    <View style={styles.mainListWrapper}>
    <View>
      <Text style={styles.textColorListTitle}>
        Unlock Access to
      </Text>
    </View>
    <View style={styles.innerlistwrapper}>
      <Ionicons name='checkmark-circle' color="#00d9b6" size={20} />
      <Text style={styles.textColorList}>Video & Audio Lessons</Text>
    </View>
    <View style={styles.innerlistwrapper}>
      <Ionicons name='checkmark-circle' color="#00d9b6" size={20} />
      <Text style={styles.textColorList}>Rich & Ready Class Notes</Text>
    </View>
    <View style={styles.innerlistwrapper}>
      <Ionicons name='checkmark-circle' color="#00d9b6" size={20} />
      <Text style={styles.textColorList}>Practice Quizzes & Solutions</Text>
    </View>
    <View style={styles.innerlistwrapper}>
      <Ionicons name='checkmark-circle' color="#00d9b6" size={20} />
      <Text style={styles.textColorList}>Gain Mastery with Storytelling</Text>
    </View>
    <View style={styles.innerlistwrapper}>
      <Ionicons name='checkmark-circle' color="#00d9b6" size={20} />
      <Text style={styles.textColorList}>Achive Academimic Excellence</Text>
    </View>
    </View>
    <View style={styles.subwrapper}>
      <Text style={styles.subtextColor}>
        Subscription for:
      </Text>
      <DropdownComponent inputValue="Select Child" />
      <DropdownComponent inputValue="Select Class" />
      <ButtonComponent buttonInput="Proceed" />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Subscribe