import React, {useEffect, useState} from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {FlatList, StyleSheet, View} from 'react-native';
import {BackButton} from '../components/Base/BackButton';
import {Typography} from '../components/Base/Typography';
import {Colors} from '../utils/styles';
import {SView} from '../components/Base/SView';
import {userRef} from '../utils/firebaseHelper';
import dayjs from 'dayjs';

interface IProps {
  time: string;
  date: string;
  amount: number;
}

interface DataType {
  time: {
    hours: number;
    minute: number;
    seconds: number;
    string: string;
  };
  date: string;
  amount: number;
}

const HistoryCard = ({amount, date, time}: IProps) => {
  return (
    <View style={styles.cardWrapper}>
      <SView
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <View>
          <Typography variant="p3SemiBold">{time}</Typography>
          <Typography variant="buttonSubtitle" color={Colors.LIGHT_GRAY}>
            {date as unknown as string}
          </Typography>
        </View>
        <View style={styles.priceWrapper}>
          <Typography variant="buttonLarge">{amount} ₴</Typography>
        </View>
      </SView>
    </View>
  );
};

export const History = () => {
  const [data, setData] = useState<DataType[]>([]);
  const getData = () => {
    userRef.onSnapshot(snapshot => {
      setData(snapshot.data()?.history);
    });
  };

  useEffect(() => {
    const unsubscribe = getData();

    return unsubscribe;
  }, []);

  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <BackButton />
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={30}>
          Історія
        </Typography>
        <FlatList
          data={data}
          renderItem={({item}) => {
            const date = dayjs(item.date).format('DD.MM.YY hh:mm');

            return (
              <HistoryCard
                amount={item.amount}
                date={date}
                time={item.time.string}
              />
            );
          }}
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  cardWrapper: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  priceWrapper: {
    backgroundColor: Colors.BG,
    padding: 5,
    borderRadius: 5,
  },
});
