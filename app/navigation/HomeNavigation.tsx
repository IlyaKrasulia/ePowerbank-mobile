import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Home} from '../screens/Home';
import {ScanQr} from '../screens/ScanQr';
import {UsageManual} from '../screens/UsageManual';

const Stack = createNativeStackNavigator<StackParamList>();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnum.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreenEnum.Home}
        component={Home}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name={ScreenEnum.ScanQr} component={ScanQr} />
      <Stack.Screen name={ScreenEnum.UsageManual} component={UsageManual} />
    </Stack.Navigator>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
