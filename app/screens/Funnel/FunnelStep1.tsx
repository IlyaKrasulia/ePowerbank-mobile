import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';

export const FunnelStep1 = () => {
  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_1.png')}
      index={0}
      nextScreen={ScreenEnum.FunnelStep2}
      title="Кроки пошуку"
      text="Шукайте Повербанк, який підійде саме вам! Прості кроки допоможуть вам знайти найкращий варіант, що задовольнить ваші потреби в енергозабезпеченні, навіть у найекстремальніших ситуаціях."
    />
  );
};
