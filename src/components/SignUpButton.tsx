import React from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import { textInputMaxWidth, textInputMinWidth } from '../constants/Style';

export interface Props {
  email: string,
  password: string,
  color: string
 }

interface State { }

export class SignUpButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onSignUp(): Promise<any> {
    return new Promise((resolve, reject) => {
      Alert.alert('TODO: Implement onSignUp()')
    })
  }

  render(): any {
    return (
      <View style={styles.container}>
        <Button
          title="Sign Up"
          onPress={this.onSignUp}
          accessibilityLabel="sign up"
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
  }
});