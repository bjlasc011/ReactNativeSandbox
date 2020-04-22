import React from 'react';
import { StyleSheet, Text, Alert, ScrollView, View } from 'react-native';
import ProductCard from '../components/Card';

// just placeholder data for demonstration
const products = [
  {
    uri: require('../../assets/react.png'),
    featuredSubtitle: "React image 1",
    description: "Description of the product",
    rating: 3.5,
    price: 12.97
  },
  {
    uri: require('../../assets/react.png'),
    featuredSubtitle: "React image 2",
    description: "Description of the product",
    rating: 4,
    price: 35.22
  },
  {
    uri: require('../../assets/react.png'),
    featuredSubtitle: "React image 3",
    description: "Description of the product",
    rating: 4.5,
    price: 18.29
  },
  {
    uri: require('../../assets/react.png'),
    featuredSubtitle: "React image 4",
    description: "This is a really long description that might change the styling of the cards, but it should wrap.",
    rating: 2.25,
    price: 6.49
  }
]

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>
        Home Screen
      </Text>
      {
        products.map((product, index) => {
          return (
            <ProductCard
              uri={product.uri}
              featuredSubtitle={product.featuredSubtitle}
              description={product.description}
              rating={product.rating}
              price={product.price}
              onPress={() => Alert.alert('Animate card to expand details')}
              key={index}
            />
          )
        })
      }
      <View style={styles.spacer}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  },
  spacer: {
    height: 200,
    width: 1
  }
});
