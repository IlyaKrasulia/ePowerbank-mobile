import React from 'react';
import {Mapbox} from '../components/Home/Mapbox';
import {SView} from '../components/Base/SView';
import {StyleSheet, View} from 'react-native';
import {ProfileIcon, QrCodeIcon} from '../assets/images/base';
import {Colors, screenWidth} from '../utils/styles';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <SView flex={1}>
      <Mapbox />
      <ButtonWrapper
        style={styles.profileButton}
        onPress={() => navigation.openDrawer()}>
        <ProfileIcon height={26} width={26} />
      </ButtonWrapper>
      <View style={styles.scanQrWrapper}>
        <ButtonWrapper style={styles.scanQrButton} onPress={() => {}}>
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
});
