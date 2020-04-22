import React from 'react';
import { StyleSheet, Text, NativeTouchEvent, NativeSyntheticEvent, TouchableWithoutFeedback, View } from "react-native";
import { Card, Image } from 'react-native-elements'
import StarRating from './StarRating';
import CostAmount from './CostAmount';

export interface Props {
  uri: string,
  featuredSubtitle: string,
  description: string,
  rating: number,
  price: number,
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export default function ProductCard({ uri, featuredSubtitle, description, rating, price, onPress }: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Card
        featuredSubtitle={featuredSubtitle}
        featuredSubtitleStyle={styles.featuredSubtitleStyle}
      >
        {
          <View style={styles.row}>
            <Image source={{uri: uri}} style={styles.image} />

            <View style={styles.column}>
              <Text>
                {description}
              </Text>

              <View style={styles.cardFoot}>
                <StarRating rating={rating} />
                <View style={styles.span}></View>
                <CostAmount price={price} />
              </View>
            </View>

          </View>
        }
      </Card>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    minWidth: 300
  },
  featuredSubtitleStyle: {
    alignContent: 'flex-end'
  },
  image: {
    width: 200,
    height: 200
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 8
  },
  span: {
    width: 16
  },
  cardFoot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
})