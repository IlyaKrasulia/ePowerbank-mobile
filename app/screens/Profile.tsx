import React, {useState} from 'react';
import {AppLayout} from '../components/Base/AppLayout';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/styles';
import {BackButton} from '../components/Base/BackButton';
import {Typography} from '../components/Base/Typography';
import {BaseInput} from '../components/Inputs/BaseInput';
import {CustomButton} from '../components/Button/CustomButton';
import {KeyboardAvoidingLayout} from '../components/Base/KeyboardAvoidingLayout';
import {SView} from '../components/Base/SView';
import {ButtonWrapper} from '../components/Button/ButtonWrapper';
import {BackIcon, FlagUAIcon, MoreIcon} from '../assets/images/base';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../utils/types';
import {ProfileModal} from '../components/Profile/ProfileModal';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {profileValidation} from '../utils/validations';
import useStorage from '../hooks/useStorage';
import i18next from 'i18next';

export const Profile = () => {
  const {t} = i18next;
  const {navigate} = useNavigation();
  const {name, email} = useSelector((state: RootState) => state.auth.userData);
  const [modalOpened, setModalOpened] = useState(false);
  const [language] = useStorage('language');
  const number = '+380662192962';

  const updateInfo = () => {
    firestore()
      .collection('Users')
      .doc(firebase.auth().currentUser?.uid)
      .update({
        name: formik.values.name,
        email: formik.values.email,
      });
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      phone: number,
      language: 'Українська',
    },
    onSubmit: (values, {setSubmitting}) => {
      // if (
      //   JSON.stringify(values) ===
      //   JSON.stringify({
      //     name: name,
      //     email: email,
      //     phone: number,
      //     language: 'Українська',
      //   })
      // ) {
      //   setSubmitting(false);
      //   return;
      // }
      try {
        updateInfo();
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: profileValidation,
  });

  const isFormUnchanged =
    JSON.stringify(formik.values) === JSON.stringify(formik.initialValues);

  console.log(
    Boolean(
      JSON.stringify(formik.values) ===
        JSON.stringify({
          name: name,
          email: email,
          phone: number,
          language: 'Українська',
        }),
    ),
  );

  return (
    <AppLayout>
      <KeyboardAvoidingLayout keyboardVerticalOffset={70}>
        <>
          <View style={styles.wrapper}>
            <SView
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <BackButton />
              <ButtonWrapper onPress={() => setModalOpened(true)}>
                <MoreIcon height={30} width={30} />
              </ButtonWrapper>
            </SView>
            <Typography
              variant="h3"
              textAlign="center"
              marginTop={20}
              marginBottom={20}>
              {t('profile.title')}
            </Typography>
            <SView gap={20}>
              <BaseInput
                defaultValue={formik.values.name}
                onChange={text => formik.setFieldValue('name', text)}
                placeholder={t('profile.name')}
                error={formik.touched.name ? formik.errors.name : ''}
              />
              <BaseInput
                defaultValue={formik.values.email}
                onChange={text => formik.setFieldValue('email', text)}
                label="Email"
                placeholder="Email"
                error={formik.touched.email ? formik.errors.email : ''}
              />
              <BaseInput
                defaultValue={formik.values.phone}
                onChange={text => formik.setFieldValue('phone', text)}
                placeholder={t('profile.phone')}
                type="phone"
                rightIcon={<FlagUAIcon width={25} height={25} />}
                disabled
              />
              <ButtonWrapper
                onPress={() => navigate(ScreenEnum.ChooseLanguage)}>
                <BaseInput
                  defaultValue={language === 'uk' ? 'Українська' : 'English'}
                  onChange={text => formik.setFieldValue('language', text)}
                  placeholder={t('profile.language')}
                  disabled
                  rightIcon={
                    <BackIcon
                      width={25}
                      height={25}
                      style={{transform: [{rotate: '180deg'}]}}
                    />
                  }
                />
              </ButtonWrapper>
            </SView>
          </View>
          <SView
            marginLeft={20}
            marginRight={20}
            style={{backgroundColor: Colors.BG, paddingTop: 10}}>
            <CustomButton
              onPress={formik.handleSubmit}
              text={t('base.update')}
              background={Colors.PRIMARY}
              disabled={isFormUnchanged || formik.isValid}
            />
          </SView>
          <ProfileModal state={modalOpened} setState={setModalOpened} />
        </>
      </KeyboardAvoidingLayout>
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
