import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';


const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        }
      }}
      >
        <Stack.Screen
        name='Login'
        component={Login}
        options = {{
          headerShown: false,
        }}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App