import React from 'react';
import {AppLayout} from '../../components/Base/AppLayout';
import {Typography} from '../../components/Base/Typography';
import {BaseInput} from '../../components/Inputs/BaseInput';
import {SView} from '../../components/Base/SView';
import {CustomButton} from '../../components/Button/CustomButton';
import {Colors} from '../../utils/styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenEnum} from '../../utils/types';

export const AddAdditionalInfo = () => {
  const {navigate} = useNavigation();
  return (
    <AppLayout>
      <SView marginRight={15} marginLeft={15} flex={1} marginTop={10}>
        <Typography variant="p1SemiBold" textAlign="center" marginBottom={24}>
          Давайте познайомимось ближче
        </Typography>
        <SView gap={10}>
          <BaseInput
            defaultValue=""
            onChange={() => {}}
            placeholder="Прізвище"
          />
          <BaseInput defaultValue="" onChange={() => {}} placeholder="Ім'я" />
          <BaseInput defaultValue="" onChange={() => {}} placeholder="Email" />
          <SView flexDirection="row" justifyContent="space-between" gap={15}>
            <SView flex={1}>
              <BaseInput defaultValue="" onChange={() => {}} placeholder="DD" />
            </SView>
            <SView flex={1}>
              <BaseInput defaultValue="" onChange={() => {}} placeholder="MM" />
            </SView>
            <SView flex={1}>
              <BaseInput defaultValue="" onChange={() => {}} placeholder="YY" />
            </SView>
          </SView>
        </SView>
      </SView>
      <SView marginRight={15} marginLeft={15} marginBottom={10}>
        <CustomButton
          onPress={() => navigate(ScreenEnum.ChooseCity)}
          text="Продовжити"
          background={Colors.PRIMARY_BUTTON}
        />
      </SView>
    </AppLayout>
  );
};
