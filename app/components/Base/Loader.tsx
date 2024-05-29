import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface IProps {
  color: string;
}

export const Loader = ({color}: IProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    position: 'absolute',
    borderRadius: 50,
    zIndex: -2,
    borderColor: Colors.LighterGray,
    borderWidth: 3,
  },
});
