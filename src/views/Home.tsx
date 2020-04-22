import React from 'react';
import { StyleSheet, Text, View, Image, Alert, FlatList, Platform, Dimensions } from 'react-native';
import { IUser } from '../models/User';
import { OS } from '../constants/Device';
import { DefaultUser } from '../constants/NewUser';
import { LoginButton } from '../components/LoginButton';
import { EmailTextInput } from '../components/EmailInput';
import { PasswordTextInput } from '../components/PasswordInput';
import { SignUpButton } from '../components/SignUpButton';
import { pallete } from '../constants/Style';
import { Item, ListItem } from '../components/Item';

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
      { title: 'Version', data: Platform.Version.toString() },
      { title: 'Screen Dimension', data: `${Dimensions.get('screen').width} x ${Dimensions.get('screen').height}` }
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

        <Text style={styles.greeting}>
          {'Good Morning'}
        </Text>

        <EmailTextInput />
        <PasswordTextInput />

        <View style={styles.spacer}></View>
        
        <LoginButton email={this.email} password={this.passwordInput} color={pallete.primary} />
        <SignUpButton email={this.email} password={this.passwordInput} color={pallete.lightGray} />
        
        <View style={styles.deviceMeta}>
          <Text>
            { 'Device Meta' }
          </Text>
          <FlatList
            data={this.getDeviceMeta()}
            renderItem={({ item }) => <ListItem item={item} />}
            keyExtractor={(item: Item) => item.title}
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    flex: 1,
    color: '#000',
    fontWeight: '600',
    marginBottom: 24,
    alignSelf: 'center',
    backgroundColor: '#FFF'
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    alignSelf: 'center'
  },
  spacer: {
    height: 16
  },
  deviceMeta: {

  }
});
