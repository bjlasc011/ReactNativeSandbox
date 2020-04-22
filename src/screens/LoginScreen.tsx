import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { statusBarHeight } from '../constants/Device';
import { pallete } from '../constants/Style';
import Login from '../components/Login';


const hideKeyboard = () => Keyboard.dismiss();

export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Platform.OS === 'ios' || Platform.OS === 'android' ? hideKeyboard : () => null}>
      <View style={styles.container}>
        <View style={styles.home}>
          <Login />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: pallete.appBackground,
    paddingTop: statusBarHeight,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flex: 1
  },
  menu: {
    alignItems: 'flex-end',
    alignSelf: 'stretch'
  },
  home: {
    alignItems: 'center',
    alignSelf: 'stretch'
  }
});
