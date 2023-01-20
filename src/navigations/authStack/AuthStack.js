import React from 'react'
import { View, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Parent from '../../screens/parentDashboard';


const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Parent' component={Parent}  />
    </Stack.Navigator>
  )
}

export default AuthStack