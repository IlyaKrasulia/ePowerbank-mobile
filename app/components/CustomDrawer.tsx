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

interface NavItemProps {
  text: string;
  icon: ReactNode;
  balance?: number;
}

const NavItem = ({text, icon, balance}: NavItemProps) => {
  return (
    <ButtonWrapper onPress={() => {}}>
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
        {balance && (
          <Typography variant="p1SemiBold" color={Colors.WHITE}>
            {balance} ₴
          </Typography>
        )}
      </SView>
    </ButtonWrapper>
  );
};

export const CustomDrawer = () => {
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
              balance={111}
              icon={<PaymentIcon width={20} height={20} />}
              text="Payment"
            />
            <NavItem
              icon={<ClockIcon width={20} height={20} />}
              text="History"
            />
            <NavItem icon={<PhoneIcon width={20} height={20} />} text="Help" />
            <NavItem
              icon={<ProfileWhiteIcon width={20} height={20} />}
              text="Profile"
            />
            <NavItem
              icon={<SettingsIcon width={20} height={20} />}
              text="Settings"
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
