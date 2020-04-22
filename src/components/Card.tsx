import React from 'react';
import { StyleSheet, ActivityIndicator, Text, NativeTouchEvent, NativeSyntheticEvent, TouchableWithoutFeedback, View } from "react-native";
import { Card } from 'react-native-elements'
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
        image={{ uri: uri }}
        imageProps={{
          PlaceholderContent: <ActivityIndicator />,
          style: styles.image
        }}
        featuredSubtitle={featuredSubtitle}
        featuredSubtitleStyle={styles.featuredSubtitleStyle}
      >
        {
          <View>
            <Text>
              {description}
            </Text>
            <View style={styles.row}>
              <StarRating rating={rating}/>
              <CostAmount price={price}/>
            </View>

          </View>
        }
      </Card>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  }
})