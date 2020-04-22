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
      {[1, 2, 3, 4, 5].map(star => {
        if (star <= rating) {
          return <Icon name="star" color={pallete.yellow} key={star}></Icon>
        } else if (star > rating && rating > star - 1) {
          return <Icon name="star-half" color={pallete.yellow} key={star}></Icon>
        } else {
          return <Icon name="star-border" color={pallete.yellow} key={star}></Icon>
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});