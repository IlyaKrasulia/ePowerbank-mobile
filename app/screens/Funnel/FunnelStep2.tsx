import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';
import i18n from '../../i18n/i18n';

export const FunnelStep2 = () => {
  const {t} = i18n;

  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_2.png')}
      index={2}
      nextScreen={ScreenEnum.FunnelStep3}
      title={t('funnel.step2.title')}
      text={t('funnel.step2.info')}
    />
  );
};
