import React, { useState } from 'react'
import { View, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Parent from '../../screens/parentDashboard';
import MyChildren from '../../screens/children/MyChildren';
import Subscribe from '../../screens/subscribe/Subscribe';
import Materials from '../../screens/materials/Materials';
import MoreInfo from '../../screens/MoreInfo/MoreInfo';
import AddChild from '../../screens/addChild/AddChild';
import TeacherDashboard from '../../screens/teacher/TeacherDashboard';
import SearchScreen from '../../screens/search/SearchScreen';
import DownloadScreen from '../../screens/downloadscreen/DownloadScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Parent' component={Parent}  />
          <Stack.Screen name='AddChild' component={AddChild}  />
      </Stack.Navigator>
    )
  }

const TabNavigator = () => {
  const [tabs, setTabs] = useState(1)

  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: "#fff"},
        tabBarInactiveTintColor: "#708090",
        tabBarActiveTintColor: "#00d9b6"
        }}
        >
        {tabs === 2 && <Tab.Screen name="Parent Dashboard" 
        component={HomeStack} 
        options={{ tabBarIcon: ({color, size}) => (
            <Ionicons name='home-outline' color={color} size={size} />
        )}}
        />}
        {tabs === 1 && <Tab.Screen name="Teacher Dashboard" 
        component={TeacherDashboard} 
        options={{ tabBarIcon: ({color, size}) => (
            <Ionicons name='home-outline' color={color} size={size} />
        )}}
        />}
        <Tab.Screen name="Materials" component={tabs === 2? Materials : SearchScreen} 
        options={{ tabBarIcon: ({color, size}) => (
            <Ionicons name='search' color={color} size={size} />
        )}}
        />
        <Tab.Screen name={tabs === 2? "My Children" : "Downloads"} component={tabs === 2? MyChildren : DownloadScreen} 
        options={{ tabBarIcon: ({color, size}) => (
            tabs === 2? <Fontisto name='persons' color={color} size={size} />: <FontAwesome name='cloud-download' color={color} size={size} /> 
        )}}
        />
        <Tab.Screen name="Subscribe" component={Subscribe} 
        options={{ tabBarIcon: ({color, size}) => (
            <Fontisto name='credit-card' color={color} size={size} />
        )}}
        />
        <Tab.Screen name="More info" component={MoreInfo}
        options={{ tabBarIcon: ({color, size}) => (
            <FontAwesome name='bars' color={color} size={size} />
        )}} 
        />
    </Tab.Navigator>
  )
}

export default TabNavigator