import React from 'react';
import { StyleSheet, View } from "react-native";
import { Icon } from 'react-native-elements'
import { pallete } from '../constants/Style';

export interface Props {
  rating: number
}

export default function StarRating({ rating }: Props) {
  return (
    <View style={styles.row}>
      {
        [1, 2, 3, 4, 5].map(star => {
          let icon = 'star';
          let color = pallete.yellow;
          if (star > rating) {
            if (rating > star - 1) {
              icon = "star-half";
            } else {
              icon = "star-border";
              color = pallete.lightGray;
            }
          }
          return <Icon name={icon} color={color} key={star}></Icon>
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});