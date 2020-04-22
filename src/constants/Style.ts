import { Dimensions } from "react-native";

export const textInputMaxWidth: number = Dimensions.get('window').width - 80;
export const textInputMinWidth: number = 300;

export const pallete = {
  primary: '#2962FF',
  primaryLight: '#768fff',
  primaryDark: '#0039cb',
  accent: '#40c4ff',
  accentLight: '#82f7ff',
  accentDark: '#0094cc',
  disabled: '#D8D8D8',
  gray: '#888',
  lightGray: '#CCC',
  font: '#242424',
  appBackground: '#F5F5F5'
}

export const appStyles = {
  textInput: {
    minHeight: 40,
    marginVertical: 8,
    maxWidth: textInputMaxWidth,
    minWidth: textInputMinWidth,
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
    borderBottomColor: pallete.lightGray
  }
}
