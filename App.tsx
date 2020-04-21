import React from 'react';
import { Home } from './views/Home';
import { PlatformMeta } from './constants/Device';
import { StyleSheet, View } from 'react-native';
import { AppMenu } from './components/AppMenu';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <AppMenu isLoggedIn={false}/>
      </View>
      <Home platformOS={PlatformMeta.platform}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '555555'
  },
  menuContainer: {
    alignContent: 'flex-end'
  }
});