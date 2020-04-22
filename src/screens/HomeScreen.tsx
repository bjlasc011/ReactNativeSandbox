import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../App';

export default function HomeScreen() {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <Text>
        Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  }
});
