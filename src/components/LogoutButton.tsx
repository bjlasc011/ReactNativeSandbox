import React from 'react';
import { StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/core';
import { ROUTES } from '../../App';
import { pallete } from '../constants/Style';

export default function LogoutButton() {
  const navigation = useNavigation();
  return (
    <Button
      color={pallete.lightGray}
      onPress={() => navigation.navigate(ROUTES.Login)}
      title="Logout"
    />
  );
}

const styles = StyleSheet.create({

});
