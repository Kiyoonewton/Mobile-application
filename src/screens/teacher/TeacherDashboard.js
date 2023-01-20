import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import {styles} from './styles';


const TeacherDashboard = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.addClassBtn}>
       <TouchableOpacity 
       style={styles.innerwrapper}
        onPress={() => navigation.navigate("Subscribe")}
       >
        <Text style={styles.textColor}>Add a New Class</Text>
       </TouchableOpacity>
          <Entypo name='dots-three-vertical' color={"#000"} size={20} style={styles.dotwrapper}/>
      </View>
      <View style={styles.welcomeheader}>
        <Text style={styles.textColorWelcome}>Welcome John!</Text>
        <View style={styles.innerwelcome}>
          <Text style={styles.textColorInner}>Tester</Text>
          <Text style={styles.textColorInnerT}>100 Coins</Text>
        </View>
      </View>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>My Subjects</Text>
      </View>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>Past Questions</Text>
      </View>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>Resume Watching</Text>
      </View>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>My Faves</Text>
      </View>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectHeader}>Top 10</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TeacherDashboard