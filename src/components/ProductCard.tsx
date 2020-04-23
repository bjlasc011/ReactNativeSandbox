import React from 'react';
import { StyleSheet, Text, NativeTouchEvent, NativeSyntheticEvent, TouchableWithoutFeedback, View, Dimensions } from "react-native";
import { Card, Image } from 'react-native-elements'
import StarRating from './StarRating';
import CostAmount from './CostAmount';
import { AddToCartButton } from './AddToCartButton';
import { pallete } from '../constants/Style';
import { QuantityPicker } from './QuantityPicker';

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
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <Card
        featuredSubtitle={featuredSubtitle}
        featuredSubtitleStyle={styles.featuredSubtitleStyle}
      >
        <View style={styles.row}>
          <View style={styles.column}>
            <Image source={{ uri: 'https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png' }} style={styles.image} />
            <StarRating rating={rating} />
          </View>

          <View style={styles.column}>
            <Text numberOfLines={6}>
              {description}
            </Text>
          </View>
        </View>

        <View style={styles.cardFoot}>
          <CostAmount price={price} />
          <QuantityPicker />
          <AddToCartButton onPress={() => { }} color={pallete.accent} />
        </View>

      </Card>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  featuredSubtitleStyle: {
    alignContent: 'flex-end'
  },
  image: {
    height: Dimensions.get('window').width * 0.3,
    width: Dimensions.get('window').width * 0.3
  },
  row: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width > 600 ? 600 : Dimensions.get('window').width - 80
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 8
  },
  cardFoot: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width > 600 ? 600 : Dimensions.get('window').width - 80,
    height: 80
  }
})