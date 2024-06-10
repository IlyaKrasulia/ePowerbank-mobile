import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';
import i18n from '../../i18n/i18n';

export const FunnelStep3 = () => {
  const {t} = i18n;

  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_6.png')}
      index={3}
      nextScreen={ScreenEnum.FunnelStep4}
      title={t('funnel.step3.title')}
      text={t('funnel.step3.info')}
    />
  );
};
