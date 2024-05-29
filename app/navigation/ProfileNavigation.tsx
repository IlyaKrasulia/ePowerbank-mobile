import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Profile} from '../screens/Profile';
import {ChooseLanguage} from '../screens/ChooseLanguage';

const Stack = createNativeStackNavigator<StackParamList>();

export const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnum.Profile}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreenEnum.Profile}
        component={Profile}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.ChooseLanguage}
        component={ChooseLanguage}
      />
    </Stack.Navigator>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
