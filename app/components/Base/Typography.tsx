import React from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import {Colors} from '../../utils/styles';

type TextAlignType = TextStyle['textAlign'];
type AlignSelfType = TextStyle['alignSelf'];
type TextTransformType = TextStyle['textTransform'];
type TextDecorationType = TextStyle['textDecorationLine'];

interface ITypography extends TextProps {
  variant: keyof typeof typographyStyles;
  children: React.ReactNode;
  color?: ColorValue;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  textAlign?: TextAlignType;
  textDecoration?: TextDecorationType;
  alignSelf?: AlignSelfType;
  textTransform?: TextTransformType;
  opacity?: number;
  style?: StyleProp<TextStyle>;
}

export const Typography = ({
  variant,
  children,
  color = Colors.DARK,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  opacity,
  textAlign = 'left',
  textDecoration = 'none',
  alignSelf,
  textTransform,
  style,
  ...textProps
}: ITypography) => {
  return (
    <Text
      style={[
        typographyStyles[variant],
        {
          color,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          opacity,
          textAlign,
          alignSelf,
          textDecorationLine: textDecoration,
          textTransform,
        },
        style,
      ]}
      {...textProps}>
      {children}
    </Text>
  );
};

export const typographyStyles = StyleSheet.create({
  h1: {
    fontSize: 40,
    lineHeight: 47.7,
    fontFamily: 'Roboto-Bold',
  },
  screenTitle: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  },
  h2: {
    fontSize: 24,
    lineHeight: 28.6,
    fontFamily: 'Roboto-Bold',
  },
  h2SemiBold: {
    fontSize: 24,
    lineHeight: 28.6,
    fontFamily: 'Roboto-Medium',
  },
  h3: {
    fontSize: 23,
    fontWeight: '700',
    lineHeight: 27.45,
  },
  h4Bold: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 26.25,
  },
  p1: {
    fontSize: 18,
    lineHeight: 21.4,
    fontWeight: '400',
  },
  p1SemiBold: {
    fontSize: 18,
    lineHeight: 20.3,
    fontWeight: '600',
  },
  p1Medium: {
    fontSize: 18,
    lineHeight: 21.4,
    fontFamily: 'Roboto-Medium',
  },
  p2: {
    fontSize: 15,
    lineHeight: 17.9,
    fontFamily: 'Roboto-Regular',
  },
  p2Medium: {
    fontSize: 16,
    lineHeight: 17.9,
    fontFamily: 'Roboto-Medium',
  },
  p2SemiBold: {
    fontSize: 15,
    lineHeight: 17.9,
    fontWeight: '600',
  },
  p2Bold: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
  },
  p3: {
    fontSize: 14,
    lineHeight: 16.7,
    fontWeight: '400',
  },
  p3Medium: {
    fontSize: 14,
    lineHeight: 16.7,
    fontWeight: '500',
  },
  p3Bold: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
  },
  p3SemiBold: {
    fontSize: 14,
    lineHeight: 16.7,
    fontWeight: '600',
  },
  p4SemiBold: {
    fontSize: 12,
    lineHeight: 13,
    fontWeight: '600',
  },
  input: {
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    fontSize: 17,
    lineHeight: 20.3,
    fontWeight: '600',
  },
  buttonSubtitle: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '600',
  },
  buttonLarge: {},
  question: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },
});
