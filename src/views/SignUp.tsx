import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IUser } from '../models/User';
import { OS } from '../constants/Device';
import { DefaultUser } from '../constants/NewUser';
import { EmailTextInput } from '../components/EmailInput';
import { PasswordTextInput } from '../components/PasswordInput';
import { LoginButton } from '../components/LoginButton';
import { SignUpButton } from '../components/SignUpButton';

export interface Props {
  platformOS: OS;
}

interface State {
  user: IUser;
}

export class SignUp extends React.Component<Props, State> {
  passwordInput1: string = '';
  passwordInput2: string = '';
  email: string = '';

  constructor(props: Props) {
    super(props);

    this.state = {
      user: DefaultUser
    };
  }

  render(): any {
    return (
      <View style={styles.container}>

        <Image style={styles.tinyLogo} source={require('../../assets/react.png')} />

        <Text style={styles.greeting}>
          {'Create an Account'}
        </Text>

        <View style={styles.buttons}>

          <EmailTextInput/>

          <PasswordTextInput/>
          <PasswordTextInput/>
          
          <SignUpButton email={this.email} password={this.passwordInput1} color={'#2962FF'}/>
          <LoginButton email={this.email} password={this.passwordInput1} color={'#D8D8D8'}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5F5F5'
  },
  buttons: {
    flexDirection: 'column',
    minHeight: 64,
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
  tinyLogo: {
    height: 80,
    width: 80,
    borderRadius: 50
  }
});
