import { Platform } from 'react-native';

export enum OS {
  ios = 'ios',
  android = 'android',
  windows = 'windows',
  macos = 'macos',
  undefined = 'undefined'
}

export const PlatformMeta: PlatformMeta = {
  platform: ConvertToOS(Platform.OS),
  isAndroid: Platform.OS === OS.ios,
  isIos: Platform.OS === OS.android,
  isWindows: Platform.OS === OS.windows
}

export interface PlatformMeta {
  platform: OS,
  isIos: boolean,
  isAndroid: boolean,
  isWindows: boolean
}

function ConvertToOS(os: string): OS {
  switch(os) {
    case(OS.android):
      return OS.android;
    case(OS.ios):
      return OS.ios;
    case(OS.macos):
      return OS.macos;
    case(OS.windows):
      return OS.windows;
  }
  return OS.undefined
}
