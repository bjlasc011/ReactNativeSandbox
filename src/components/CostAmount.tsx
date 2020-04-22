import React from 'react';
import { StyleSheet, View, Text } from "react-native";

export interface Props {
  price: number
}

export default function CostAmount({ price }: Props) {
  return (
    <View>
    <Text style={styles.currency}>
      {'$' + Math.floor(price).toString() + (price % Math.floor(price)).toString().substring(1, 4)}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  currency: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});

