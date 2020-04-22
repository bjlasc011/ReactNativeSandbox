import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import { ThemeProvider, Theme, Button } from 'react-native-elements';
import LogoutButton from './src/components/LogoutButton';

const theme: Theme = {
  Button: {
    raised: true,
  },
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
            options={{ 
              title: 'React Native', 
              headerLeft: null,
              headerRight: () => <LogoutButton/>
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}


export enum ROUTES {
  Login = 'Login',
  SignUp = 'SignUp',
  Home = 'Home'
}
