/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Home, OrderDelivery, Restaurant } from './screens';
import Tabs from './navigation/tabs'; 

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
}, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false
         }}

         initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
