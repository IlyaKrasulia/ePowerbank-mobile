import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../utils/styles';

interface IProps {
  index?: number;
}

export const FunnelProgressBar = ({index = 1}: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.circle, {backgroundColor: Colors.PRIMARY}]} />
      <View
        style={[styles.line, index >= 2 && {backgroundColor: Colors.PRIMARY}]}
      />
      <View
        style={[styles.circle, index >= 2 && {backgroundColor: Colors.PRIMARY}]}
      />
      <View
        style={[styles.line, index >= 3 && {backgroundColor: Colors.PRIMARY}]}
      />
      <View
        style={[styles.circle, index >= 3 && {backgroundColor: Colors.PRIMARY}]}
      />
      <View
        style={[styles.line, index >= 4 && {backgroundColor: Colors.PRIMARY}]}
      />
      <View
        style={[styles.circle, index >= 4 && {backgroundColor: Colors.PRIMARY}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  circle: {
    backgroundColor: Colors.LIGHT,
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  line: {
    backgroundColor: Colors.LIGHT,
    width: 30,
    height: 1,
  },
});
