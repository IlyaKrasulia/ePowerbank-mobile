import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Support} from '../screens/Support';
import {SupportSection} from '../screens/SupportSection';

const Stack = createNativeStackNavigator<StackParamList>();

export const SupportNavigatin = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnum.Support}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenEnum.Support} component={Support} />
      <Stack.Screen
        name={ScreenEnum.SupportSection}
        component={SupportSection}
      />
    </Stack.Navigator>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
