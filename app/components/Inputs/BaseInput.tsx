import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../utils/styles';
import {Typography, typographyStyles} from '../Base/Typography';
import {CityIcon} from '../../assets/images/base';

interface IProps {
  defaultValue: string;
  onChange: (val: string) => void;
  leftIcon?: boolean;
  error?: string;
  placeholder: string;
  maxLength?: number;
  onBlur?: (e: any) => void;
  keyboardType?: 'number-pad';
}

export const BaseInput = ({
  defaultValue,
  onChange,
  leftIcon,
  error,
  placeholder,
  maxLength,
  onBlur,
  keyboardType,
}: IProps) => {
  return (
    <View>
      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: error ? Colors.ERROR : Colors.TEXT,
          },
        ]}>
        {leftIcon && (
          <View style={styles.leftWrapper}>
            <CityIcon height={20} width={20} />
          </View>
        )}
        <TextInput
          value={defaultValue}
          onChangeText={onChange}
          maxLength={maxLength}
          style={[styles.input, leftIcon && {paddingLeft: 50}]}
          placeholderTextColor={Colors.TEXT}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onBlur={onBlur}
        />
      </View>
      {error && (
        <Typography variant="p3Medium" color={Colors.ERROR} marginTop={5}>
          {error}
        </Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
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
});
