import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Students from './pages/Students';
import Courses from './pages/Courses';
import 'react-native-gesture-handler';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Menu = createDrawerNavigator(); 




export default function App() {



  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="HomePage" component={HomePage}/>
        <Menu.Screen name="Students" component={Students}/>
        <Menu.Screen name="Courses" component={Courses}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}
