import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.Login}
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name={ROUTES.SignUp}
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name={ROUTES.Home}
          component={HomeScreen}
          options={{ title: 'React Native' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export enum ROUTES {
  Login = 'Login',
  SignUp = 'SignUp',
  Home = 'Home'
}
