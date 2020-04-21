import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IUser } from '../models/User';
import { OS } from '../constants/Device';
import { DefaultUser } from '../constants/NewUser';
import { LoginButton } from '../components/LoginButton';
import { EmailTextInput } from '../components/EmailInput';
import { PasswordTextInput } from '../components/PasswordInput';
import { SignUpButton } from '../components/SignUpButton';

export interface Props {
  platformOS: OS;
}

interface State {
  user: IUser;
}

export class Home extends React.Component<Props, State> {
  passwordInput: string = '';
  email: string = '';
  
  constructor(props: Props) {
    super(props);

    this.state = {
      user: DefaultUser
    };
  }
  
  onSignUp = () => 
    true; // navigate to signup
  getGreeting() {
    return (this.isMorning() ? 'Good Morning' : 'Good Afternoon') + ` ${this.state.user.firstName} ${this.state.user.lastName}`;
  }
  isMorning() {
    const date = new Date();
    return date.getHours() < 12;
  }

  render(): any {
    return (
      <View style={styles.container}>

        <Image 
          style={styles.tinyLogo}
          source={require('../assets/react.png')} 
        />

        <Text style={styles.greeting}>
          {this.getGreeting()}
        </Text>

        <View style={styles.inputs}>
          <EmailTextInput/>
          <PasswordTextInput/>
        </View>

        <View style={styles.buttons}>
          <LoginButton email={this.email} password={this.passwordInput} color={'#2962FF'}/>
          <SignUpButton email={this.email} password={this.passwordInput} color={'#D8D8D8'}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'F5F5F5'
  },
  buttons: {
    flexDirection: 'column',
    minHeight: 64,
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  inputs: {
    flexDirection: 'column',
    minHeight: 60,
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
    marginBottom: 24
  },
  tinyLogo: {
    height: 80,
    width: 80,
    borderRadius: 50
  }
});
