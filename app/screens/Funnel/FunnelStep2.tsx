import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';

export const FunnelStep2 = () => {
  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_2.png')}
      index={2}
      nextScreen={ScreenEnum.FunnelStep3}
      title="Готуйтеся до дії без зайвих зусиль"
      text="Скануйте і готуйте ваш Повербанк до роботи легко та швидко. Більше часу для дій - менше очікувань! Вам залишається лише насолоджуватись безперервним живленням вашого пристрою."
    />
  );
};
