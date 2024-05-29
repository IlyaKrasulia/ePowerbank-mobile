import React from 'react';
import {StyleProp, StyleSheet, Pressable, ViewStyle} from 'react-native';
import {Colors} from '../../utils/styles';
import {Typography} from '../Base/Typography';
import { Loader } from '../Base/Loader';

interface IProps {
  text: string;
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  background?: string;
  disabledColor?: string;
  activeColor?: string;
  preloaderColor?: string;
  type?: 'fill' | 'outline' | 'wrapper';
  textColor?: string;
  pressInDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const CustomButton = ({
  type = 'fill',
  text,
  background = Colors.DARK,
  onPress,
  disabled,
  textColor = Colors.WHITE,
  marginTop,
  marginBottom,
  loading,
  pressInDisabled = false,
  style,
}: IProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        type && styles.btn,
        {
          backgroundColor: disabled || loading ? background : background,
          opacity: pressed || disabled ? 0.7 : 1,
          marginTop,
          marginBottom,
        },
        style,
      ]}
      disabled={(disabled && !pressInDisabled) || loading}
      onPress={onPress}>
      {loading ? (
        <Loader color={Colors.BLACK} />
      ) : (
        <Typography variant="button" color={textColor}>
          {text}
        </Typography>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
