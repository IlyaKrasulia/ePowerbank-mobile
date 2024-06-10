import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {BackButton} from '../components/Base/BackButton';
import {Typography} from '../components/Base/Typography';
import {BaseInput} from '../components/Inputs/BaseInput';
import {CustomButton} from '../components/Button/CustomButton';
import {KeyboardAvoidingLayout} from '../components/Base/KeyboardAvoidingLayout';
import i18n from '../i18n/i18n';

export const Promocode = () => {
  const {t} = i18n;

  return (
    <AppLayout>
      <KeyboardAvoidingLayout keyboardVerticalOffset={70}>
        <>
          <View style={styles.wrapper}>
            <BackButton />
            <Typography variant="h3" textAlign="center" marginTop={20}>
              {t('balance.promo')}
            </Typography>
            <Typography
              variant="p4SemiBold"
              textAlign="center"
              marginTop={20}
              marginBottom={30}>
              {t('balance.promoInfo')}
            </Typography>
            <BaseInput
              defaultValue=""
              onChange={() => {}}
              placeholder={t('balance.enterPromo')}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <CustomButton
              onPress={() => {}}
              text={t('base.send')}
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
