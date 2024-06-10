import React from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';
import {Typography} from '../Base/Typography';
import {FunnelProgressBar} from './FunnelProgressBar';
import {SView} from '../Base/SView';
import {Colors} from '../../utils/styles';
import {CustomButton} from '../Button/CustomButton';
import {AppLayout} from '../Base/AppLayout';
import {ScreenEnum} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import i18n from '../../i18n/i18n';

interface IProps {
  title: string;
  text: string;
  icon: ImageProps;
  nextScreen: ScreenEnum;
  index: number;
}

export const FunnelTemplate = ({
  title,
  icon,
  nextScreen,
  text,
  index,
}: IProps) => {
  const {navigate} = useNavigation();
  const {t} = i18n;

  const goNext = () => {
    navigate(nextScreen);
  };

  return (
    <AppLayout>
      <FunnelProgressBar index={index} />
      <SView
        alignItems="center"
        justifyContent="center"
        marginRight={15}
        marginLeft={15}
        flex={1}>
        <Image source={icon} style={styles.icon} />
        <Typography variant="h2" marginTop={15} textAlign="center">
          {title}
        </Typography>
        <Typography
          variant="p2"
          textAlign="center"
          color={Colors.TEXT}
          marginTop={10}>
          {text}
        </Typography>
      </SView>
      <SView marginRight={15} marginLeft={15} marginBottom={10}>
        <CustomButton
          text={index === 4 ? t('funnel.step4.button') : t('base.next')}
          onPress={goNext}
          background={Colors.PRIMARY_BUTTON}
        />
      </SView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 180,
    width: 180,
  },
});
