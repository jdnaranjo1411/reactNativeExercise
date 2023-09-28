import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Students from './pages/Students';
import Courses from './pages/Courses';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); // Crea un StackNavigator




export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='Students' component={Students} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
