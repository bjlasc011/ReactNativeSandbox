import React from 'react';
import { StyleSheet, View, Image, Alert, Platform, Dimensions } from 'react-native';
import { IUser } from '../models/User';
import { OS } from '../constants/Device';
import { DefaultUser } from '../constants/NewUser';
import { LoginButton } from '../components/LoginButton';
import { EmailTextInput } from '../components/EmailInput';
import { PasswordTextInput } from '../components/PasswordInput';
import { SignUpButton } from '../components/SignUpButton';
import { pallete } from '../constants/Style';
import { Item } from '../components/Item';
import { DeviceMeta } from '../components/List';

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

  onSignUp = () => true; // navigate to signup

  getDeviceMeta(): ReadonlyArray<Item> {
    return [
      { title: 'Platform OS', data: Platform.OS },
      { title: 'Version', data: `${Platform.Version}` },
      { title: 'Screen Dimension', data: `${Dimensions.get('screen').width} x ${Dimensions.get('screen').height}` },
      { title: 'Window Dimension', data: `${Dimensions.get('window').width} x ${Dimensions.get('window').height}` }
    ]
  }

  getGreeting(): string {
    const greeting = (this.isMorning() ? 'Good Morning' : 'Good Afternoon');// + 
    Alert.alert(greeting + '...');
    return greeting;
  }

  isMorning(): boolean {
    const date = new Date();
    return date.getHours() < 12;
  }

  mounted() {
    Alert.alert('Mounted')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/react.png')}
        />

        <EmailTextInput />
        <PasswordTextInput />

        <View style={styles.spacer}></View>
        
        <LoginButton email={this.email} password={this.passwordInput} color={pallete.primary} />
        <SignUpButton email={this.email} password={this.passwordInput} color={pallete.lightGray} />
        
        <View style={styles.spacer}></View>

        <DeviceMeta/>
        
      </View>
    );
  }
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
