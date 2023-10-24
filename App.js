import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native'; // To add styles

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

import HomeScreen from './HomeScreen';// Home screen
import CIT_111_1 from './CIT_111_1';// CIT_111_1_2 Screen
import CIT_111_2 from './CIT_111_2';// CIT_111_1_2 Screen
import CIT_111_3 from './CIT_111_3';// CIT_111_3_4 Screen
import CIT_111_4 from './CIT_111_4';// CIT_111_3_4 Screen
import WDD_130_1 from './WDD_130_1';// WDD_130_1_2 Screen
import WDD_130_2 from './WDD_130_2';// WDD_130_2 Screen

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.



class App extends Component {
  render() {
    return (
      <NavigationContainer> 
      {/* // Inside the render function, we have added NavigationContainer components. */ }
        <Stack.Navigator> 
        {/* // Then we have added the Stack.Navigator component inside the NavigationContainer component. */}

{/* // stack.Navigator contains all the screens using stack.Screen component.  */}
{/* //It has multiple props. For now, we are using two props i.e. name and component. */}

          <Stack.Screen
            name="Home"
            component={HomeScreen}
          /> 
          
          <Stack.Screen
            name="CIT_111_1"
            component={CIT_111_1}
          />

          <Stack.Screen
            name="CIT_111_2"
            component={CIT_111_2}
          />
          
          <Stack.Screen
            name="CIT_111_3"
            component={CIT_111_3}
          />

          <Stack.Screen
            name="CIT_111_4"
            component={CIT_111_4}
          />
          
          <Stack.Screen
            name="WDD_130_1"
            component={WDD_130_1}
          />
          <Stack.Screen
            name="WDD_130_2"
            component={WDD_130_2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//      backgroundColor: '#fff',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;