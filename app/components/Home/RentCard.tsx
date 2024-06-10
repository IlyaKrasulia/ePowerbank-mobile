import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {CustomButton} from '../Button/CustomButton';
import {Colors} from '../../utils/styles';
import {SView} from '../Base/SView';
import {Typography} from '../Base/Typography';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {updateDeviceStatus, userRef} from '../../utils/firebaseHelper';

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

    return {
      string: `${hours !== 0 ? (hours < 10 ? '0' + hours : hours + ':') : ''}${
        minutes < 10 ? '0' + minutes : minutes
      }:${seconds < 10 ? '0' + seconds : seconds}`,
      seconds,
      minutes,
      hours,
    };
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

  const handleEndRent = async () => {
    Alert.alert('Ви дійсно бажаєте завершити оренду повербанка?', undefined, [
      {
        text: 'Завершити',
        onPress: async () => {
          try {
            let arr: any = [];

            updateDeviceStatus(
              data ? data.stationDocId : '',
              data ? data.id : -1,
              'free',
              userUid,
              'endRent',
            );

            const getHistory = () => {
              return new Promise((resolve, reject) => {
                userRef.onSnapshot(documentSnapshot => {
                  const history = documentSnapshot.data()?.history;
                  if (history) {
                    resolve(history);
                  } else {
                    reject('History not found');
                  }
                });
              });
            };

            arr = await getHistory();

            await userRef.update({
              activRent: null,
              history: [
                ...arr,
                {
                  date: new Date().toString(),
                  time: elapsedTime,
                  amount:
                    elapsedTime.minutes < 1
                      ? 6
                      : elapsedTime.hours >= 1
                      ? elapsedTime.hours * 180
                      : elapsedTime.minutes * 3,
                },
              ],
            });

            console.log('Update successful');
          } catch (error) {
            console.error('Error updating user data: ', error);
          }
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
            {elapsedTime.string}
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
