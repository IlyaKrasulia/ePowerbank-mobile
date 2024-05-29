import React from 'react';
import {Mapbox} from '../components/Home/Mapbox';
import {SView} from '../components/Base/SView';
import {StyleSheet, View} from 'react-native';
import {ProfileIcon, QrCodeIcon} from '../assets/images/base';
import {Colors, screenWidth} from '../utils/styles';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum, StackParamList} from '../utils/types';
import {RentCard} from '../components/Home/RentCard';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {DrawerNavigationProp} from '@react-navigation/drawer';

export const Home = () => {
  const navigation = useNavigation<DrawerNavigationProp<StackParamList>>();
  const activeRent = useSelector(
    (state: RootState) => state.auth.userData.activRent,
  );
  return (
    <SView flex={1}>
      <Mapbox />
      <ButtonWrapper
        style={styles.profileButton}
        onPress={() => navigation.openDrawer()}>
        <ProfileIcon height={26} width={26} />
      </ButtonWrapper>
      {activeRent?.id && (
        <View style={styles.cardWrapper}>
          <RentCard />
        </View>
      )}
      <View style={styles.scanQrWrapper}>
        <ButtonWrapper
          style={styles.scanQrButton}
          onPress={() => navigation.navigate(ScreenEnum.ScanQr)}>
          <QrCodeIcon height={40} width={40} />
        </ButtonWrapper>
      </View>
    </SView>
  );
};

const styles = StyleSheet.create({
  profileButton: {
    backgroundColor: '#ffffff99',
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    top: 50,
    left: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanQrButton: {
    backgroundColor: Colors.PRIMARY,
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanQrWrapper: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
  },
  cardWrapper: {
    position: 'absolute',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
});
