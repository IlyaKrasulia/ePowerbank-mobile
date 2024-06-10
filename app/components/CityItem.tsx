import React, {SetStateAction} from 'react';
import {SView} from './Base/SView';
import {Pressable, StyleSheet, View} from 'react-native';
import {Typography} from './Base/Typography';
import {Colors} from '../utils/styles';

interface IProps {
  title: string;
  occupied: boolean;
  support: boolean;
  active: boolean;
  state: string;
  setState: SetStateAction<any>;
}

export const CityItem = ({
  occupied,
  support,
  title,
  setState,
  state,
}: IProps) => {
  const handlePress = () => {
    setState(title);
  };

  return (
    <Pressable onPress={handlePress}>
      <SView flexDirection="row" alignItems="center" gap={10} marginBottom={25}>
        <Pressable onPress={handlePress} style={styles.circle}>
          {state === title && <View style={styles.checked} />}
        </Pressable>
        <Typography variant="h4Bold" opacity={!support ? 0.6 : 1}>
          {title} {occupied && '💔'}
        </Typography>
      </SView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 22,
    height: 22,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: Colors.PRIMARY,
    width: 10,
    height: 10,
    borderRadius: 50,
  },
});
