import React from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { pallete } from '../constants/Style';
import { SignUpButton } from './SignUpButton';
import PasswordTextInput from './PasswordInput';
import EmailTextInput from './EmailInput';
import LoginButton from './LoginButton';
import DeviceMeta from './List';
import { useNavigation } from '@react-navigation/core';

interface Props {
}

export default function Login({ }: Props) {
  const navigation = useNavigation();
  const onSignUp = () => navigation.navigate('SignUp')
  const onLogin = () => {
    return Alert.alert('validate credentails, onSuccess navigate to homeScreen');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/react.png')} />

      <EmailTextInput placeholder={'email'} />
      <PasswordTextInput placeholder={'password'} />
      <View style={styles.spacer}></View>

      <LoginButton color={pallete.primary} onPress={onLogin}/>
      <SignUpButton color={pallete.lightGray} onPress={onSignUp} />
      <View style={styles.spacer}></View>

      <DeviceMeta />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center'
  },
  spacer: {
    height: 16
  }
});
