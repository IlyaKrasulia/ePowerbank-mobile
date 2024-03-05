import React from 'react';
import {FunnelTemplate} from '../../components/Funnel/FunnelTemplate';
import {ScreenEnum} from '../../utils/types';

export const FunnelStep3 = () => {
  return (
    <FunnelTemplate
      icon={require('../../assets/images/emoji/emoji_6.png')}
      index={3}
      nextScreen={ScreenEnum.FunnelStep4}
      title="Нехай ваші пригоди ніколи не зупиняються"
      text="Забезпечуйте енергією ваші пригоди та повсякденні справи з Повербанком. Незамінний помічник, який завжди поруч з вами, готовий допомогти в будь-якій ситуації. Насолоджуйтесь безмежними можливостями вашого пристрою без обмежень."
    />
  );
};
