import React, {useState} from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {Alert, StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {BackButton} from '../components/Base/BackButton';
import {Typography} from '../components/Base/Typography';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {SView} from '../components/Base/SView';
import {CustomButton} from '../components/Button/CustomButton';
import {CustomCheckbox} from '../components/Base/CustomCheckbox';

export const ChooseLanguage = () => {
  const [value, setValue] = useState('Українська');

  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <BackButton />
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={20}>
          Мова
        </Typography>
        <ButtonWrapper onPress={() => setValue('Українська')}>
          <View style={styles.linkWrapper}>
            <Typography variant="p2SemiBold">Українська</Typography>
            <CustomCheckbox
              onPress={() => setValue('Українська')}
              value={value === 'Українська' ? true : false}
            />
          </View>
        </ButtonWrapper>
        <ButtonWrapper onPress={() => setValue('Англійська')}>
          <View style={styles.linkWrapper}>
            <Typography variant="p2SemiBold">Англійська</Typography>
            <CustomCheckbox
              onPress={() => setValue('Англійська')}
              value={value === 'Англійська' ? true : false}
            />
          </View>
        </ButtonWrapper>
        <ButtonWrapper
          onPress={() => {
            setValue('Російська');
            Alert.alert(
              'Вам врученну електронну повістку пройдіть найближчим часом в місцевий військомат',
            );
          }}>
          <View style={styles.linkWrapper}>
            <Typography variant="p2SemiBold">Російська 🤡</Typography>
            <CustomCheckbox
              onPress={() => setValue('Російська')}
              value={value === 'Російська' ? true : false}
            />
          </View>
        </ButtonWrapper>
      </View>
      <SView marginLeft={20} marginRight={20}>
        <CustomButton
          onPress={() => {}}
          text="Обновити"
          background={Colors.PRIMARY}
          disabled
        />
      </SView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  linkWrapper: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    padding: 13,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
