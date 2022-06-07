import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './src-medicine-app/Login';
import HomeScreen from './src-medicine-app/HomeScreen'
import QRScanner from './src-medicine-app/QRScanner';
import SearchNearBy from './src-medicine-app/SearchNearBy';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function App(){
    return (
      <NavigationContainer> 
        <Stack.Navigator
          // screenOptions={
          //   {
          //     header: () => null
          //   }
          // }
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            name="QRScanner"
            component={QRScanner}
          />
          <Stack.Screen
            name="SearchNearBy"
            component={SearchNearBy}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
