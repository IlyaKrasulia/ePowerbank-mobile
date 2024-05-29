import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {BackButton} from '../components/Base/BackButton';
import {Typography} from '../components/Base/Typography';
import {BaseInput} from '../components/Inputs/BaseInput';
import {CustomButton} from '../components/Button/CustomButton';
import {KeyboardAvoidingLayout} from '../components/Base/KeyboardAvoidingLayout';

export const Promocode = () => {
  return (
    <AppLayout>
      <KeyboardAvoidingLayout keyboardVerticalOffset={70}>
        <>
          <View style={styles.wrapper}>
            <BackButton />
            <Typography variant="h3" textAlign="center" marginTop={20}>
              Промокод
            </Typography>
            <Typography
              variant="p4SemiBold"
              textAlign="center"
              marginTop={20}
              marginBottom={30}>
              Введіть промокод, отриманий від друга, або будь-який інший
              промокод
            </Typography>
            <BaseInput
              defaultValue=""
              onChange={() => {}}
              placeholder="Введіть свій промокод"
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <CustomButton
              onPress={() => {}}
              text="Надіслати"
              background={Colors.PRIMARY}
              disabled
            />
          </View>
        </>
      </KeyboardAvoidingLayout>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  linkWrapper: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    padding: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
