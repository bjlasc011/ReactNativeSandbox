import React from 'react';
import { Home } from './src/views/Home';
import { PlatformMeta, statusBarHeight } from './src/constants/Device';
import { StyleSheet, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AppMenu } from './src/components/AppMenu';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
      <View style={styles.menu}>
        <AppMenu isLoggedIn={false}/>
      </View>
      <View style={styles.home}>
        <Home platformOS={PlatformMeta.platform}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

function hideKeyboard() {
  Keyboard.dismiss();
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
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