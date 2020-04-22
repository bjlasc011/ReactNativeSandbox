import React from 'react';
import { TextInput} from 'react-native';
import { appStyles } from '../constants/Style';

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
      <TextInput
        placeholder={' email'}
        style={appStyles.textInput}
        autoFocus={true}
        maxLength={255}
        autoCorrect={false}>
      </TextInput>
    );
  }
}
