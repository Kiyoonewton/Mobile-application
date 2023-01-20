import React from 'react';
import {Provider} from 'react-redux';
import AppStack from './src/navigations/appStack/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/navigations/authStack/AuthStack';

// const Stack = createNativeStackNavigator();

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      {/* <AuthStack /> */}
      <AppStack />
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;
