import React from 'react';
import { Button, View } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../App';
import { pallete } from '../constants/Style';

export default function LogoutButton() {
  const navigation = useNavigation();
  return (
    <View style={{marginRight: 16}}>
      <Button
        color={pallete.lightGray}
        onPress={() => navigation.navigate(ROUTES.Login)}
        title="Logout"
      />
    </View>
  );
}
