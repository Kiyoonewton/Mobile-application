import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentPage from '../../screens/StudentPage';
import LessonPage from '../../screens/LessonPage';
import ClassNote from '../../screens/ClassNote';
import LessonVideo from '../../screens/LessonVideo';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './../tabNavigator/TabNavigator';
import PastquestionSub from '../../screens/PastquestionSub';
import Instruction from '../../screens/PastquestionSub/Extra/Instruction';
import QuestionLoader from '../../screens/PastquestionSub/Extra/QuestionLoader';
import Classroom from '../../screens/Classroom';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="StudentPage" component={StudentPage} />
        <Stack.Screen name="LessonPage" component={LessonPage} />
        <Stack.Screen name="ClassNote" component={ClassNote} />
        <Stack.Screen name="LessonVideo" component={LessonVideo} />
        <Stack.Screen name="PastquestionSub" component={PastquestionSub} />
        <Stack.Screen name="Instruction" component={Instruction} />
        <Stack.Screen name="QuestionLoader" component={QuestionLoader} />
        <Stack.Screen name="Classroom" component={Classroom} />

        <Stack.Screen name="Parent" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
