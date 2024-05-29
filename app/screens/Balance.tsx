import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {Typography} from '../components/Base/Typography';
import {BackButton} from '../components/Base/BackButton';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../utils/types';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {BackIcon} from '../assets/images/base';

export const Balance = () => {
  const {navigate} = useNavigation();

  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <BackButton />
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={30}>
          Ваш баланс
        </Typography>
        <View style={styles.linkWrapper}>
          <Typography variant="p3SemiBold">Баланс</Typography>
          <Typography variant="h4Bold" color={Colors.PRIMARY}>
            ₴100
          </Typography>
        </View>
        <ButtonWrapper onPress={() => navigate(ScreenEnum.PaymentCards)}>
          <View style={styles.linkWrapper}>
            <Typography variant="p3SemiBold">
              Додати / Редагувати платіжні картки
            </Typography>
            <BackIcon style={{transform: [{rotate: '180deg'}]}} />
          </View>
        </ButtonWrapper>
        <ButtonWrapper onPress={() => navigate(ScreenEnum.Promocode)}>
          <View style={styles.linkWrapper}>
            <Typography variant="p3SemiBold">Додати промокод</Typography>
            <BackIcon style={{transform: [{rotate: '180deg'}]}} />
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
    borderColor: Colors.LIGHT_GRAY,
    padding: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
