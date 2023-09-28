import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage} from './pages/HomePage';
import { Students } from './pages/Students';
import {Courses} from './pages/Courses';
const Menu = createDrawerNavigator()

export default function app(){
  return(
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='HomePage' component={HomePage}/>
        <Menu.Screen name='Students' component={Students}/>
        <Menu.Screen name='Courses' component={Courses}/>


      </Menu.Navigator>
    </NavigationContainer>
  )
}