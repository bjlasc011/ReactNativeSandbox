import React from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import { textInputMaxWidth, textInputMinWidth } from '../constants/Style';

export interface Props {
  email: string,
  password: string,
  color: string
 }

interface State { }

export class LoginButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onLogin(): Promise<any> {
    return new Promise((resolve, reject) => {
      Alert.alert('TODO: Implement onLogin()');
    })
  }

  render(): any {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={this.onLogin}
          accessibilityLabel="login"
          color={this.props.color}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    height: 60,
    maxWidth: textInputMaxWidth,
    minWidth: textInputMinWidth
  },
});