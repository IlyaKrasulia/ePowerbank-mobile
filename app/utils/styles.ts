import {Dimensions, StyleSheet} from 'react-native';

// Dimensions
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

// BaseStyle
export const baseStyle = StyleSheet.create({
  screenView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});

// Colors
export enum Colors {
  TRANSPARENT = 'transparent',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  DARK = '#1A1A1A',
  MEDIUM = '#191919',
  MEDIUM_ADITIONAL = '#D6EBFF',
  MEDIUM_LIGHT = '#89888F',
  LIGHT = '#DFDFDF',
  SECONDARY = '#02C822',
  TEXT = '#808080',
  ERROR = '#F01B1B',
  SUCCESS = '#14AE5C',
  BG = '#EFEEF3',
  SLIDER_ACTIVE = '#007AFF',
  SLIDER = '#787880',
  BORDER = '#CDCFD3',
  PRIMARY = '#4392ff',
  GRAY = '#222020',
  LIGHT_GRAY = '#8E8E93',
  PRIMARY_TEXT = '#14AE5C',
  PRIMARY_BUTTON = '#2c84ff',
}

export enum Fonts {
  LIGHT = 'Manrope-Light',
  REGULAR = 'Manrope-Regular',
  MEDIUM = 'Manrope-Medium',
  SEMI_BOLD = 'Manrope-SemiBold',
  BOLD = 'Manrope-Bold',
  EXTRA_BOLD = 'Manrope-Extrabold',
}
