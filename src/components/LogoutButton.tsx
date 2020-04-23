import React from 'react';
import { View } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../App';
import { pallete } from '../constants/Style';
import { Icon } from 'react-native-elements';

export default function LogoutButton() {
  const navigation = useNavigation();
  return (
    <View style={{marginRight: 16}}>
      <Icon
        name="exit-to-app"
        color={pallete.primary}
        onPress={() => navigation.navigate(ROUTES.Login)}
      />
    </View>
  );
}
