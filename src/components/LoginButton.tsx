import React from 'react';
import {StyleSheet, View, Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';
import { textInputMaxWidth, textInputMinWidth } from '../constants/Style';
import { useNavigation } from '@react-navigation/core';

export interface Props {
  color: string,
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export default function LoginButton({color, onPress}: Props) {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={onPress}
          accessibilityLabel="login"
          color={color}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    height: 40,
    maxWidth: textInputMaxWidth,
    minWidth: textInputMinWidth
  },
});