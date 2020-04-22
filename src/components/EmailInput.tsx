import React from 'react';
import { TextInput } from 'react-native';
import { appStyles } from '../constants/Style';

export interface Props { 
  placeholder: string
}

export default function EmailTextInput({placeholder}: Props) {
  return (
    <TextInput
      placeholder={' ' + placeholder}
      style={appStyles.textInput}
      autoFocus={true}
      maxLength={255}
      autoCorrect={false}>
    </TextInput>
  );
}
