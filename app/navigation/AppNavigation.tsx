import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenEnum, StackParamList} from '../utils/types';
import {FunnelStep1} from '../screens/Funnel/FunnelStep1';
import {FunnelStep2} from '../screens/Funnel/FunnelStep2';
import {FunnelStep3} from '../screens/Funnel/FunnelStep3';
import {FunnelStep4} from '../screens/Funnel/FunnelStep4';
import {CreateProfile} from '../screens/Auth/CreateProfile';
import {SmsVerification} from '../screens/Auth/SmsVerefication';
import {ChooseCity} from '../screens/Auth/ChooseCity';
import {AddAdditionalInfo} from '../screens/Auth/AddAdditionalInfo';
import {Home} from '../screens/Home';

interface IProps {
  initialRoute?: ScreenEnum;
}

const Stack = createNativeStackNavigator<StackParamList>();

export const AppNavigation = ({initialRoute}: IProps) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreenEnum.FunnelStep1}
        component={FunnelStep1}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.FunnelStep2}
        component={FunnelStep2}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.FunnelStep3}
        component={FunnelStep3}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.FunnelStep4}
        component={FunnelStep4}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.CreateProfile}
        component={CreateProfile}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.SmsVerefication}
        component={SmsVerification}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.AddAdditionalInfo}
        component={AddAdditionalInfo}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.ChooseCity}
        component={ChooseCity}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={ScreenEnum.Home}
        component={Home}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
