import React from 'react';
import {ButtonWrapper} from '../Button/ButtonWrapper';
import {CheckboxCheckedIcon, CheckboxIcon} from '../../assets/images/base';

interface IProps {
  onPress: () => void;
  value: boolean;
}

export const CustomCheckbox = ({onPress, value}: IProps) => {
  return (
    <ButtonWrapper onPress={onPress}>
      {value ? <CheckboxCheckedIcon /> : <CheckboxIcon />}
    </ButtonWrapper>
  );
};
