import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Balance} from '../screens/Balance';
import {PaymentCards} from '../screens/PaymentCards';
import {Promocode} from '../screens/Promocode';
import {LiqpayCheckout} from '../screens/LiqpayCheckout';

const Stack = createNativeStackNavigator<StackParamList>();

export const PaymentNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnum.Balance}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreenEnum.Balance}
        component={Balance}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen name={ScreenEnum.PaymentCards} component={PaymentCards} />
      <Stack.Screen name={ScreenEnum.Promocode} component={Promocode} />
      <Stack.Screen
        name={ScreenEnum.LiqpayCheckout}
        component={LiqpayCheckout}
      />
    </Stack.Navigator>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
