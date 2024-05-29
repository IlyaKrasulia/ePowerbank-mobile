import React from 'react';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Home} from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components/CustomDrawer';
import {PaymentNavigation} from './PaymentNavigation';
import {ProfileNavigation} from './ProfileNavigation';
import {CreateStation} from '../screens/CreateStation';
import { HomeNavigation } from './HomeNavigation';

interface IProps {
  initialRoute?: keyof StackParamList;
}

const Drawer = createDrawerNavigator<StackParamList>();

export const AppNavigation: React.FC<IProps> = ({initialRoute}) => {
  return (
    <Drawer.Navigator
      drawerContent={_ => <CustomDrawer />}
      initialRouteName={initialRoute || ScreenEnum.Home}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name={ScreenEnum.Home} component={HomeNavigation} />
      <Drawer.Screen name={ScreenEnum.Balance} component={PaymentNavigation} />
      <Drawer.Screen name={ScreenEnum.Profile} component={ProfileNavigation} />
      <Drawer.Screen
        name={ScreenEnum.CreateStation}
        component={CreateStation}
      />
    </Drawer.Navigator>
  );
};
