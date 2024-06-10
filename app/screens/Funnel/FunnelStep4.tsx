import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';
import i18n from '../../i18n/i18n';

export const FunnelStep4 = () => {
  const {t} = i18n;

  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_3.png')}
      index={4}
      nextScreen={ScreenEnum.CreateProfile}
      title={t('funnel.step4.title')}
      text={t('funnel.step4.info')}
    />
  );
};
