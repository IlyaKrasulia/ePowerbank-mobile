import React, {useState} from 'react';
import {SView} from '../../components/Base/SView';
import {PhoneInput} from '../../components/Inputs/PhoneInput';
import {CustomButton} from '../../components/Button/CustomButton';
import {Colors} from '../../utils/styles';
import {Typography} from '../../components/Base/Typography';
import {KeyboardAvoidingLayout} from '../../components/Base/KeyboardAvoidingLayout';
import {SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../../utils/types';

export const CreateProfile = () => {
  const [phone, setPhone] = useState('');
  const {navigate} = useNavigation();

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
