import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IUser } from '../models/User';
import { DefaultUser } from '../constants/NewUser';

export interface Props {
  isLoggedIn: boolean
}

interface State {
  user: IUser,
  isLoggedIn: boolean
}

export class AppMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: DefaultUser,
      isLoggedIn: this.props.isLoggedIn
    };
  }

  logout() {
    this.setState(state => {
      return { isLoggedIn: !this.state.isLoggedIn }
    })
  }

  render(): any {
    
    return (
      <View style={styles.container}>
        <Text>
          {'Menu'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  textInput: {
    minHeight: 44,
    flex: 100,
    flexDirection: 'row'
  }
});
