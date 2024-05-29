import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {CustomButton} from '../Button/CustomButton';
import {Colors} from '../../utils/styles';
import {SView} from '../Base/SView';
import {Typography} from '../Base/Typography';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import firestore from '@react-native-firebase/firestore';
import {updateDeviceStatus} from '../../utils/firebaseHelper';

export const RentCard = () => {
  const data = useSelector((state: RootState) => state.auth.userData.activRent);
  const userUid = useSelector((state: RootState) => state.auth.userData.uid);

  const convertFirestoreTimestampToDate = (timestamp: {
    seconds: number;
    nanoseconds: number;
  }): any => {
    if (timestamp) {
      const milliseconds =
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000;
      return new Date(milliseconds);
    }
  };

  const startDateObj = convertFirestoreTimestampToDate(
    data
      ? data.timestamp
      : {
          seconds: 0,
          nanoseconds: 0,
        },
  );

  const calculateElapsedTime = (startDate: any) => {
    const now: any = new Date();
    const elapsedTime = now - startDate;

    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    return {days, hours, minutes, seconds};
  };

  const [elapsedTime, setElapsedTime] = useState(
    calculateElapsedTime(startDateObj),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(calculateElapsedTime(startDateObj));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDateObj]);

  const handleEndRent = () => {
    Alert.alert('Ви дійсно бажаєте завершити оренду повербанка?', undefined, [
      {
        text: 'Завершити',
        onPress: () => {
          updateDeviceStatus(
            data ? data.stationDocId : '',
            data ? data.id : -1,
            'free',
            userUid,
            'endRent',
          );
          firestore()
            .collection('Users')
            .doc(userUid)
            .update({activRent: null});
        },
        isPreferred: true,
      },
      {text: 'Відмінити', onPress: () => {}},
    ]);
  };

  return (
    <View style={styles.wrapper}>
      <SView
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <View>
          <Typography variant="h4Bold" color={Colors.WHITE}>
            ID: {data?.id}
          </Typography>
          <Typography variant="h4Bold" marginTop={5} color={Colors.WHITE}>
            {elapsedTime.hours > 1 && elapsedTime.hours + ':'}
            {elapsedTime.minutes < 10 && 0}
            {elapsedTime.minutes}:{elapsedTime.seconds < 10 && 0}
            {elapsedTime.seconds}
          </Typography>
        </View>
        <SView>
          <Typography variant="h4Bold" marginTop={5} color={Colors.WHITE}>
            {data?.charge}%
          </Typography>
        </SView>
      </SView>
      <CustomButton
        onPress={handleEndRent}
        text="Завершити оренду"
        background={Colors.ERROR}
        marginTop={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: '#292929c9',
    padding: 10,
    borderRadius: 10,
  },
});
