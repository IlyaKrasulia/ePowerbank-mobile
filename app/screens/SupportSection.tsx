import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BackButton} from '../components/Base/BackButton';
import {RouteProp} from '@react-navigation/native';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Typography} from '../components/Base/Typography';

interface IProps {
  route: RouteProp<StackParamList, ScreenEnum.SupportSection>;
}

export const SupportSection = ({route}: IProps) => {
  const {data} = route.params;

  return (
    <AppLayout>
      <ScrollView style={styles.wrapper}>
        <BackButton />
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={20}>
          {data.title}
        </Typography>
        {data.sections.map((it, index) => {
          return (
            <View style={{marginTop: 10}} key={index}>
              <Typography variant="p2SemiBold">{it.title}</Typography>
              {it.info.map((text, i) => (
                <Typography key={i} variant="p2" marginTop={5}>
                  {text}
                </Typography>
              ))}
            </View>
          );
        })}
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
