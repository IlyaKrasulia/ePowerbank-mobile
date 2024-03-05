import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

interface IProps extends ViewProps {
  children?: React.ReactNode;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  gap?: number;
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  flexWrap?: ViewStyle['flexWrap'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  style?: ViewStyle;
}

export const SView = ({
  children,
  style,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  gap,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
}: IProps) => {
  return (
    <View
      style={[
        {
          marginLeft,
          marginRight,
          marginTop,
          marginBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
          gap,
          flex,
          flexDirection,
          flexWrap,
          justifyContent,
          alignItems,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
