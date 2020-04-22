import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import ProductCard from '../components/Card';

export default function HomeScreen() {
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <Text>
        Home Screen
      </Text>
      <ProductCard 
        uri="../../assets/react.png" 
        featuredSubtitle="React image" 
        description="Description of the product"
        rating={3.5}
        price={12.97}
        onPress={() => Alert.alert('Animate card to expand details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  }
});
