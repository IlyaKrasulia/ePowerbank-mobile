import React from 'react';
import {SView} from '../Base/SView';
import {ButtonWrapper} from '../Button/ButtonWrapper';
import {BackIcon} from '../../assets/images/base';

interface IProps {
  rightAction: () => void;
}

export const SHeader = ({rightAction}: IProps) => {
  return (
    <SView>
      <ButtonWrapper onPress={rightAction}>
        {/* <BackIcon /> */}
      </ButtonWrapper>
    </SView>
  );
};
