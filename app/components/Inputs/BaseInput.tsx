import React, {ReactNode, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../utils/styles';
import {Typography, typographyStyles} from '../Base/Typography';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import MaskInput from 'react-native-mask-input';

interface IProps {
  defaultValue: string;
  onChange: (val: string) => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
  placeholder: string;
  maxLength?: number;
  onBlur?: (e: any) => void;
  keyboardType?: 'number-pad';
  label?: string;
  type?: 'phone';
  disabled?: boolean;
}

export const BaseInput = ({
  defaultValue,
  onChange,
  leftIcon,
  rightIcon,
  error,
  placeholder,
  maxLength,
  onBlur,
  keyboardType,
  type,
  disabled,
}: IProps) => {
  const offset = useSharedValue<number>(defaultValue ? -10 : -20);

  useEffect(() => {
    offset.value = withTiming(defaultValue ? -10 : 0);
  }, [defaultValue, offset]);

  const labelStyle = useAnimatedStyle(() => ({
    opacity: interpolate(offset.value, [-10, 0], [1, 0]),
    transform: [{translateY: interpolate(offset.value, [-30, 0], [-20, -2])}],
  }));

  return (
    <View>
      <Animated.View style={[styles.label, labelStyle]}>
        <Typography variant="p3" color={error && Colors.ERROR}>
          {error ? error : placeholder}
        </Typography>
      </Animated.View>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: error ? Colors.ERROR : Colors.TEXT,
          },
        ]}>
        {leftIcon && <View style={styles.leftWrapper}>{leftIcon}</View>}
        {type === 'phone' ? (
          <MaskInput
            value={defaultValue}
            onChangeText={onChange}
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            readOnly={disabled}
            mask={[
              '+',
              /\d/,
              /\d/,
              /\d/,
              ' (',
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
        ) : (
          <TextInput
            value={defaultValue}
            onChangeText={onChange}
            maxLength={maxLength}
            style={[styles.input, leftIcon ? {paddingLeft: 50} : {}]}
            placeholderTextColor={Colors.TEXT}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onBlur={onBlur}
            id="name"
            readOnly={disabled}
          />
        )}
        {rightIcon && rightIcon}
      </View>
      {/* {error && (
        <Typography variant="p3Medium" color={Colors.ERROR} marginTop={5}>
          {error}
        </Typography>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    paddingRight: 20,
  },
  input: {
    textAlign: 'left',
    ...typographyStyles.input,
    borderRadius: 10,
    height: 56,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
  error: {
    borderColor: Colors.ERROR,
  },
  leftWrapper: {
    position: 'absolute',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    position: 'absolute',
    left: 17,
    backgroundColor: Colors.BG,
    zIndex: 99,
    paddingHorizontal: 5,
  },
});
