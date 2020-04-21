import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export interface Props { }

interface State {
  email: string;
}

export class EmailTextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: ''
    };
  }

  validate() {
    // TODO: regex to validate email
  }

  render(): any {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          maxLength={255}
          autoCorrect={false}>
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
