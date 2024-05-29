import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {SView} from '../components/Base/SView';
import {BackButton} from '../components/Base/BackButton';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {CheckIcon, MastercardIcon, PlusIcon} from '../assets/images/base';
import {Typography} from '../components/Base/Typography';

export const PaymentCards = () => {
  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <SView flexDirection="row" justifyContent="space-between">
          <BackButton />
          <ButtonWrapper onPress={() => {}}>
            <PlusIcon />
          </ButtonWrapper>
        </SView>
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={30}>
          Гаманець
        </Typography>
        <ButtonWrapper onPress={() => {}}>
          <View style={styles.linkWrapper}>
            <SView flexDirection="row" gap={10} alignItems="center">
              <MastercardIcon height={20} width={20} />
              <Typography variant="p3SemiBold">537541*08</Typography>
            </SView>
            <CheckIcon height={20} width={20} />
          </View>
        </ButtonWrapper>
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
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
