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
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import i18n from '../i18n/i18n';

export const Balance = () => {
  const {t} = i18n;
  const {navigate} = useNavigation();
  const balance = useSelector(
    (state: RootState) => state.auth.userData.balance,
  );

  const openLink = () => {
    InAppBrowser.open(
      'https://secure.wayforpay.com/page?vkh=665d9cab-2f0c-4309-95d1-213422d1dba8',
      {
        // iOS Properties
        dismissButtonStyle: 'done',
        preferredBarTintColor: Colors.BLACK,
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        showTitle: true,
        toolbarColor: Colors.BLACK,
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
      },
    );
  };

  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <BackButton />
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={30}>
          {t('balance.title')}
        </Typography>
        <ButtonWrapper onPress={openLink}>
          <View style={styles.linkWrapper}>
            <Typography variant="p3SemiBold">{t('balance.balance')}</Typography>
            <Typography variant="h4Bold" color={Colors.PRIMARY}>
              ₴ {balance ? balance : 0}
            </Typography>
          </View>
        </ButtonWrapper>
        <ButtonWrapper onPress={() => navigate(ScreenEnum.PaymentCards)}>
          <View style={styles.linkWrapper}>
            <Typography variant="p3SemiBold">{t('balance.addCard')}</Typography>
            <BackIcon style={{transform: [{rotate: '180deg'}]}} />
          </View>
        </ButtonWrapper>
        <ButtonWrapper onPress={() => navigate(ScreenEnum.Promocode)}>
          <View style={styles.linkWrapper}>
            <Typography variant="p3SemiBold">
              {t('balance.addPromo')}
            </Typography>
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
