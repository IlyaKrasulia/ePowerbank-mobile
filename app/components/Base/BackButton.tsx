import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackIcon} from '../../assets/images/base';
import {ButtonWrapper} from '../Button/ButtonWrapper';

export const BackButton = () => {
  const {goBack} = useNavigation();
  return (
    <ButtonWrapper onPress={goBack}>
      <BackIcon />
    </ButtonWrapper>
  );
};
