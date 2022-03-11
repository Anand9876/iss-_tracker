import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react';

const Stack=createStackNavigator();


export default class App extends Component {
  render(){
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{
      headerShown:false 
    }} >
      <Stack.Screen name='Home' component={HomeScreen} ></Stack.Screen>
      <Stack.Screen name='IssLocation' component={IssLocationScreen} ></Stack.Screen>
      <Stack.Screen name='Meteor' component={MeteorScreen} ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
}



