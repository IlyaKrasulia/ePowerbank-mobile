import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {useMemo} from 'react';
import {Colors} from '../../utils/styles';
import {Typography} from '../Base/Typography';

interface Props {
  value: string;
  onChangeText: (e: string) => void;
}

export const PhoneInput = ({value, onChangeText}: Props) => {
  const placeholderValue = useMemo(() => {
    let mask = '0000000000';
    let val = `${value}${mask.slice(0, 10 - value.length)}`;
    return `${val.substring(0, 3)} ${val.substring(3, 6)} ${val.substring(
      6,
      8,
    )} ${val.substring(8, 10)}`;
  }, [value]);

  return (
    <View style={styles.phoneInput}>
      <View style={styles.fakeInput}>
        <View style={styles.code}>
          <Typography variant="h2SemiBold">+38</Typography>
        </View>
        <Typography variant="h2SemiBold" color={Colors.LIGHT_GRAY}>
          {placeholderValue}
        </Typography>
      </View>
      <MaskInput
        value={value}
        onChangeText={(formatted, extracted) => onChangeText(extracted || '')}
        placeholderTextColor={Colors.GRAY}
        style={[styles.input]}
        mask={[
          /\d/,
          /\d/,
          /\d/,
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
        ]}
        placeholder={''}
        autoFocus
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    fontFamily: 'Roboto-Medium',
    letterSpacing: 0,
    paddingLeft: 55,
    color: Colors.BLACK,
    position: 'absolute',
    left: 0,
    right: 0,
    flex: 1,
    paddingHorizontal: 0,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  code: {
    width: 55,
  },
  fakeInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
