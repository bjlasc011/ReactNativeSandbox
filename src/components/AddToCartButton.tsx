import React from 'react';
import {StyleSheet, View, Button, NativeSyntheticEvent, NativeTouchEvent} from 'react-native';

export interface Props {
  color: string,
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export function AddToCartButton({color, onPress}: Props) {
    return (
      <View style={styles.container}>
        <Button
          title="Add to cart"
          onPress={onPress}
          accessibilityLabel="sign up"
          color={color}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    height: 40
  }
});