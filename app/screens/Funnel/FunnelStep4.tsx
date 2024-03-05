import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';

export const FunnelStep4 = () => {
  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_3.png')}
      index={4}
      nextScreen={ScreenEnum.FunnelStep1}
      title="Ми підтримуємо наших героїв"
      text="Повербанк підтримує наших захисників! Долучайтесь до програми підтримки Збройних Сил України з кожним придбаним пристроєм. Ваш вибір - ваш внесок у безпеку та захист нашої країни."
    />
  );
};
