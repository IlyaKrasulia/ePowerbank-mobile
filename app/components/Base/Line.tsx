import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../utils/styles';

export const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderColor: Colors.BORDER,
    borderWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 10,
  },
});
