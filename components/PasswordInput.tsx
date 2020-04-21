import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export interface Props { }

interface State {
  password: string;
}

export class PasswordTextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  validate() {
  }

  render(): any {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          maxLength={255}
          autoCorrect={false}
          secureTextEntry={true}>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  textInput: {
    minHeight: 40,
    flex: 100,
    flexDirection: 'row',
    minWidth: 200
  }
});
