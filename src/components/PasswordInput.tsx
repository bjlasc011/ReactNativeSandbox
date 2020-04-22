import React from 'react';
import { TextInput} from 'react-native';
import { appStyles } from '../constants/Style';

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

  validate(): boolean {
    return true; // TODO: add validation
  }

  render(): any {
    return (
      <TextInput
        placeholder={' password'}
        style={appStyles.textInput}
        maxLength={255}
        autoCorrect={false}
        secureTextEntry={true}>
      </TextInput>
    );
  }
}
