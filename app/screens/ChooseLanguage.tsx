import React from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {Alert, StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {BackButton} from '../components/Base/BackButton';
import {Typography} from '../components/Base/Typography';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {SView} from '../components/Base/SView';
import {CustomButton} from '../components/Button/CustomButton';
import {CustomCheckbox} from '../components/Base/CustomCheckbox';
import useStorage from '../hooks/useStorage';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

export const ChooseLanguage = () => {
  const {t} = useTranslation();
  const [language, setLanguage] = useStorage('language', 'uk');

  const handleChangeLanguage = (
    value: 'Українська' | 'Англійська' | 'Російська',
  ) => {
    setLanguage(value === 'Англійська' ? 'en' : 'uk');
  };

  return (
    <AppLayout>
      <View style={styles.wrapper}>
        <BackButton />
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={20}
          marginBottom={20}>
          {t('profile.language')}
        </Typography>
        <ButtonWrapper onPress={() => handleChangeLanguage('Українська')}>
          <View style={styles.linkWrapper}>
            <Typography variant="p2SemiBold">Українська</Typography>
            <CustomCheckbox
              onPress={() => handleChangeLanguage('Українська')}
              value={language === 'uk' ? true : false}
            />
          </View>
        </ButtonWrapper>
        <ButtonWrapper onPress={() => handleChangeLanguage('Англійська')}>
          <View style={styles.linkWrapper}>
            <Typography variant="p2SemiBold">Англійська</Typography>
            <CustomCheckbox
              onPress={() => handleChangeLanguage('Англійська')}
              value={language === 'en' ? true : false}
            />
          </View>
        </ButtonWrapper>
        <ButtonWrapper
          onPress={() => {
            handleChangeLanguage('Російська');
            Alert.alert(
              'Твій телефон взірветься через декілька секунд бо ти зробив хуйовий вибір засунь його в рота або в анальний отвір для яскравішого еффекту',
            );
          }}>
          <View style={styles.linkWrapper}>
            <Typography variant="p2SemiBold">Російська 🤡</Typography>
            <CustomCheckbox
              onPress={() => handleChangeLanguage('Російська')}
              value={false}
            />
          </View>
        </ButtonWrapper>
      </View>
      <SView marginLeft={20} marginRight={20}>
        <CustomButton
          onPress={() => i18next.changeLanguage(language)}
          text={t('base.update')}
          background={Colors.PRIMARY}
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
