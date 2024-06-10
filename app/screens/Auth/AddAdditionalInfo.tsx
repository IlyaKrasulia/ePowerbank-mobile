import React from 'react';
import {AppLayout} from '../../components/Base/AppLayout';
import {Typography} from '../../components/Base/Typography';
import {BaseInput} from '../../components/Inputs/BaseInput';
import {SView} from '../../components/Base/SView';
import {CustomButton} from '../../components/Button/CustomButton';
import {Colors} from '../../utils/styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../../utils/types';
import {Formik} from 'formik';
import {firebase} from '@react-native-firebase/auth';
import i18n from '../../i18n/i18n';

export const AddAdditionalInfo = () => {
  const {t} = i18n;
  const {navigate} = useNavigation();

  return (
    <AppLayout>
      <Formik
        initialValues={{
          lastname: '',
          name: '',
          email: '',
          day: '',
          mounth: '',
          year: '',
        }}
        onSubmit={values => {
          const data = {
            name: values.name,
            lastname: values.lastname,
            email: values.email,
            birthday: `${values.day}.${values.mounth}.${values.year}`,
            uid: firebase.auth().currentUser?.uid,
            emailVerificated: false,
            city: '',
          };

          navigate(ScreenEnum.ChooseCity, {userData: data});
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <SView marginRight={15} marginLeft={15} flex={1} marginTop={10}>
              <Typography
                variant="p1SemiBold"
                textAlign="center"
                marginBottom={24}>
                {t('register.header2')}
              </Typography>
              <SView gap={10}>
                <BaseInput
                  defaultValue={values.lastname}
                  onChange={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  placeholder={t('register.lastname')}
                />
                <BaseInput
                  defaultValue={values.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholder={t('register.name')}
                />
                <BaseInput
                  defaultValue={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email"
                />
                <SView
                  flexDirection="row"
                  justifyContent="space-between"
                  gap={15}>
                  <SView flex={1}>
                    <BaseInput
                      defaultValue={values.day}
                      onChange={handleChange('day')}
                      onBlur={handleBlur('day')}
                      placeholder="DD"
                    />
                  </SView>
                  <SView flex={1}>
                    <BaseInput
                      defaultValue={values.mounth}
                      onChange={handleChange('mounth')}
                      onBlur={handleBlur('mounth')}
                      placeholder="MM"
                    />
                  </SView>
                  <SView flex={1}>
                    <BaseInput
                      defaultValue={values.year}
                      onChange={handleChange('year')}
                      onBlur={handleBlur('year')}
                      placeholder="YY"
                    />
                  </SView>
                </SView>
              </SView>
            </SView>
            <SView marginRight={15} marginLeft={15} marginBottom={10}>
              <CustomButton
                onPress={handleSubmit}
                text={t('base.continue')}
                background={Colors.PRIMARY_BUTTON}
              />
            </SView>
          </>
        )}
      </Formik>
    </AppLayout>
  );
};
