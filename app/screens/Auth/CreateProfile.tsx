import React, {useEffect, useState} from 'react';
import {SView} from '../../components/Base/SView';
import {PhoneInput} from '../../components/Inputs/PhoneInput';
import {CustomButton} from '../../components/Button/CustomButton';
import {Colors} from '../../utils/styles';
import {Typography} from '../../components/Base/Typography';
import {KeyboardAvoidingLayout} from '../../components/Base/KeyboardAvoidingLayout';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../../utils/types';
import {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../redux/authSlice';

export const CreateProfile = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const {navigate} = useNavigation();

  useEffect(() => {
    if (firebase.auth().currentUser) {
      const subsctibe = firestore()
        .collection('Users')
        .doc(firebase.auth().currentUser?.uid)
        .onSnapshot(documentSnapshot => {
          if (documentSnapshot.exists) {
            dispatch(setUserData(documentSnapshot.data()));
          } else {
            navigate(ScreenEnum.AddAdditionalInfo);
          }
        });
      return () => subsctibe();
    }
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingLayout>
        <SView flex={1} paddingBottom={10} justifyContent="space-between">
          <Typography variant="p1Medium" textAlign="center" marginTop={10}>
            Введіть свій номер телефону
          </Typography>
          <SView justifyContent="center" alignItems="center">
            <PhoneInput value={phone} onChangeText={setPhone} />
          </SView>
          <SView marginRight={15} marginLeft={15}>
            <CustomButton
              text="Продовжити"
              onPress={() => navigate(ScreenEnum.SmsVerefication, {phone})}
              background={Colors.PRIMARY_BUTTON}
            />
          </SView>
        </SView>
      </KeyboardAvoidingLayout>
    </SafeAreaView>
  );
};
