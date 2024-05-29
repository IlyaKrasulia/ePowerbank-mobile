import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Typography} from '../components/Base/Typography';
import {BackButton} from '../components/Base/BackButton';
import {Line} from '../components/Base/Line';
import {CustomButton} from '../components/Button/CustomButton';
import {Colors} from '../utils/styles';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ScreenEnum, StackParamList} from '../utils/types';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {updateDeviceStatus} from '../utils/firebaseHelper';

interface IProps {
  route: RouteProp<StackParamList, 'UsageManual'>;
}

export const UsageManual = ({route}: IProps) => {
  const {navigate} = useNavigation();
  const currentUid = useSelector((state: RootState) => state.auth.userData.uid);
  const {deviceId, stationId} = route.params;

  const handleSubmit = () => {
    updateDeviceStatus(
      stationId,
      deviceId ? deviceId : -1,
      'busy',
      currentUid,
      'startRent',
      () => navigate(ScreenEnum.Home),
    );
  };

  return (
    <AppLayout>
      <ScrollView style={styles.wrapper}>
        <BackButton />
        <Typography variant="h3" textAlign="center" marginTop={20}>
          Умови користування
        </Typography>
        <Line />
        <Typography variant="p1SemiBold" textAlign="center">
          Використання повербанків
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Підключіть свій пристрій до повербанку за допомогою відповідного
          кабелю (USB-C, Micro-USB, Lightning).
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Стежте за рівнем заряду як вашого пристрою, так і повербанку.
        </Typography>
        <Line />
        <Typography variant="p1SemiBold" textAlign="center">
          Повернення повербанку
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Поверніть повербанк до будь-якої зручної станції.
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Переконайтеся, що повербанк зафіксований у станції та процес
          повернення підтверджений у додатку.
        </Typography>
        <Line />
        <Typography variant="p1SemiBold" textAlign="center">
          Зарядка та використання
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Не використовуйте повербанки, якщо вони мають видимі пошкодження.
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Не залишайте повербанки під прямим сонячним промінням або у вологих
          місцях.
        </Typography>
        <Line />
        <Typography variant="p1SemiBold" textAlign="center">
          Втрата або пошкодження
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          У разі втрати або пошкодження повербанку негайно повідомте службу
          підтримки.
        </Typography>
        <Typography variant="p3Medium" textAlign="center" marginTop={10}>
          Може бути застосовано штраф згідно з умовами використання.
        </Typography>
      </ScrollView>
      <View style={{marginHorizontal: 20}}>
        <CustomButton
          onPress={() => handleSubmit()}
          text="Підтвердити"
          background={Colors.PRIMARY}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
