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

export const Profile = () => {
  const {navigate} = useNavigation();
  const {name, email} = useSelector((state: RootState) => state.auth.userData);
  const [modalOpened, setModalOpened] = useState(false);
  const number = '+380662192962';

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      phone: number,
      language: 'Українська',
    },
    onSubmit: () => {},
  });

  const updateInfo = () => {
    firestore()
      .collection('Users')
      .doc(firebase.auth().currentUser?.uid)
      .update({
        name: formik.values.name,
        email: formik.values.email,
      });
  };

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
              Профіль
            </Typography>
            <SView gap={20}>
              <BaseInput
                defaultValue={formik.values.name}
                onChange={text => formik.setFieldValue('name', text)}
                label="Ім'я"
                placeholder="Ім'я"
              />
              <BaseInput
                defaultValue={formik.values.email}
                onChange={text => formik.setFieldValue('email', text)}
                label="Email"
                placeholder="Email"
              />
              <BaseInput
                defaultValue={formik.values.phone}
                onChange={text => formik.setFieldValue('phone', text)}
                label="Телефон"
                placeholder="Телефон"
                type="phone"
                rightIcon={<FlagUAIcon width={25} height={25} />}
                disabled
              />
              <ButtonWrapper
                onPress={() => navigate(ScreenEnum.ChooseLanguage)}>
                <BaseInput
                  defaultValue={formik.values.language}
                  onChange={text => formik.setFieldValue('language', text)}
                  label="Мова"
                  placeholder="Мова"
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
          <SView marginLeft={20} marginRight={20}>
            <CustomButton
              onPress={updateInfo}
              text="Обновити"
              background={Colors.PRIMARY}
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
