import React from 'react';
import {StyleSheet, View, Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';
import { textInputMaxWidth, textInputMinWidth } from '../constants/Style';

export interface Props {
  color: string,
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export function SignUpButton({color, onPress}: Props) {
    return (
      <View style={styles.container}>
        <Button
          title="Sign Up"
          onPress={onPress}
          accessibilityLabel="sign up"
          color={color}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    height: 40
  }
});