import React, {ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
import {SView} from './Base/SView';
import {Colors} from '../utils/styles';
import {Typography} from './Base/Typography';
import {
  ClockIcon,
  PaymentIcon,
  PhoneIcon,
  ProfileWhiteIcon,
  SettingsIcon,
} from '../assets/images/base';
import {ButtonWrapper} from './Button/ButtonWrapper';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../utils/types';
import i18n from '../i18n/i18n';

interface NavItemProps {
  text: string;
  icon?: ReactNode;
  balance?: string;
  navigateTo: any;
}

const NavItem = ({text, icon, navigateTo}: NavItemProps) => {
  const {navigate} = useNavigation();

  return (
    <ButtonWrapper onPress={() => navigate(navigateTo)}>
      <SView
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <SView flexDirection="row" alignItems="center" gap={10}>
          {icon}
          <Typography variant="p1SemiBold" color={Colors.WHITE}>
            {text}
          </Typography>
        </SView>
      </SView>
    </ButtonWrapper>
  );
};

export const CustomDrawer = () => {
  const {t} = i18n;

  return (
    <SafeAreaView style={{backgroundColor: Colors.PRIMARY, flex: 1}}>
      <SView
        paddingLeft={10}
        paddingRight={10}
        justifyContent="space-between"
        flex={1}>
        <View>
          <SView gap={20}>
            <Typography
              variant="h4Bold"
              color={Colors.WHITE}
              textAlign="center"
              marginBottom={15}
              marginTop={15}>
              LOGO
            </Typography>
            <NavItem
              icon={<PaymentIcon width={20} height={20} />}
              text={t('navigation.payments')}
              navigateTo={ScreenEnum.PaymentStack}
            />
            <NavItem
              icon={<ClockIcon width={20} height={20} />}
              text={t('navigation.history')}
              navigateTo={ScreenEnum.History}
            />
            <NavItem
              icon={<PhoneIcon width={20} height={20} />}
              text={t('navigation.support')}
              navigateTo={ScreenEnum.SupportStack}
            />
            <NavItem
              icon={<ProfileWhiteIcon width={20} height={20} />}
              text={t('navigation.profile')}
              navigateTo={ScreenEnum.ProfileStack}
            />
            <NavItem
              icon={<SettingsIcon width={20} height={20} />}
              text={t('navigation.createStation')}
              navigateTo={ScreenEnum.CreateStation}
            />
          </SView>
        </View>
        <SView marginLeft={10} style={{opacity: 0.5}}>
          <Typography color={Colors.WHITE} variant="p3">
            v 1.0
          </Typography>
        </SView>
      </SView>
    </SafeAreaView>
  );
};
