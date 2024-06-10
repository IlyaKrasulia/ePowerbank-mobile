import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';
import i18n from '../../i18n/i18n';

export const FunnelStep1 = () => {
  const {t} = i18n;
  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_1.png')}
      index={0}
      nextScreen={ScreenEnum.FunnelStep2}
      title={t('funnel.step1.title')}
      text={t('funnel.step1.info')}
    />
  );
};
