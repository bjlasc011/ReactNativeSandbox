import React from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { SignUpButton } from '../components/SignUpButton';
import EmailTextInput from '../components/EmailInput';
import PasswordTextInput from '../components/PasswordInput';
import { pallete } from '../constants/Style';

const onSignUp = () => Alert.alert('api call to sign up');

export default function SignUpScreen() {
  return (
    <View style={styles.container}>

      <Image style={styles.tinyLogo} source={require('../../assets/react.png')} />

      <View style={styles.buttons}>
        <EmailTextInput placeholder={'email'} />
        <PasswordTextInput placeholder={'password'} />
        <PasswordTextInput placeholder={'confirm password'} />
        <SignUpButton color={'#2962FF'} onPress={onSignUp}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'column',
    minHeight: 64,
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  tinyLogo: {
    height: 80,
    width: 80,
    borderRadius: 50
  }
});
