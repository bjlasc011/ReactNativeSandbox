import React from 'react';
import { TextInput} from 'react-native';
import { appStyles } from '../constants/Style';

export interface Props { 
  placeholder: string
}

export default function PasswordTextInput({placeholder}: Props) {
    return (
      <TextInput
        placeholder={' ' + placeholder}
        style={appStyles.textInput}
        maxLength={255}
        autoCorrect={false}
        secureTextEntry={true}>
      </TextInput>
    );
}
