import React, {useMemo} from 'react';
import {
  StatusBar,
  ColorValue,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import {Colors} from '../../utils/styles';
import {SView} from './SView';

interface IUiAppLayoutProps {
  children: React.ReactNode;
  backgroundColor?: ColorValue;
  bottomColor?: ColorValue;
  topColor?: ColorValue;
  barStyle?: StatusBarStyle;
  screenViewStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  activeBottomSafeArea?: boolean;
  activeTopSafeArea?: boolean;
}

export const AppLayout = ({
  children,
  backgroundColor,
  barStyle,
  screenViewStyle,
  activeBottomSafeArea = true,
  activeTopSafeArea = true,
  bottomColor,
  topColor,
}: IUiAppLayoutProps) => {
  const _backgroundColor = useMemo(
    () => backgroundColor || Colors.BG,
    [backgroundColor],
  );

  const _barStyle = useMemo(() => barStyle || 'dark-content', [barStyle]);

  return (
    <View
      style={[
        styles.container,
        screenViewStyle,
        {backgroundColor: _backgroundColor},
      ]}>
      {activeTopSafeArea && (
        <SafeAreaView style={{backgroundColor: topColor}} />
      )}
      <StatusBar backgroundColor={_backgroundColor} barStyle={_barStyle} />
      <SView flex={1}>{children}</SView>
      {activeBottomSafeArea && (
        <SafeAreaView style={{backgroundColor: bottomColor}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
