import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

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
      console.log('TODO: Implement onLogin()');
    })
  }

  render(): any {
    return (
      <View style={styles.button}>
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
  button: {
    flex: 1,
    paddingVertical: 0,
    minWidth: 200,
    margin: 8
  },
});