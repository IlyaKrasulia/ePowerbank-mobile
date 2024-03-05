import React from 'react';
import {StyleProp, Pressable, ViewStyle} from 'react-native';
import {Colors} from '../../utils/styles';

interface IProps {
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  background?: string;
  disabledBackground?: string;
  activeColor?: string;
  preloaderColor?: string;
  type?: 'fill' | 'outline' | 'wrapper';
  pressInDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  borderRadius?: number;
}

export const ButtonWrapper = ({
  children,
  background = Colors.TRANSPARENT,
  disabledBackground = Colors.TRANSPARENT,
  onPress,
  disabled,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  loading,
  pressInDisabled = false,
  borderRadius,
  style,
}: IProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor:
            disabled || loading ? disabledBackground : background,
          opacity: pressed ? 0.7 : 1,
          marginTop,
          marginBottom,
          marginLeft,
          marginRight,
          borderRadius,
        },
        style,
      ]}
      disabled={(disabled && !pressInDisabled) || loading}
      onPress={onPress}>
      {loading ? <></> : children}
    </Pressable>
  );
};
