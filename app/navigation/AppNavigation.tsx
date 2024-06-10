import React from 'react';
import {ScreenEnum, StackParamList} from '../utils/types';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components/CustomDrawer';
import {PaymentNavigation} from './PaymentNavigation';
import {ProfileNavigation} from './ProfileNavigation';
import {CreateStation} from '../screens/CreateStation';
import {HomeNavigation} from './HomeNavigation';
import {SupportNavigatin} from './SupportNavigatin';
import {History} from '../screens/History';

interface IProps {
  initialRoute?: keyof StackParamList;
}

const Drawer = createDrawerNavigator<StackParamList>();

export const AppNavigation: React.FC<IProps> = ({initialRoute}) => {
  return (
    <Drawer.Navigator
      drawerContent={_ => <CustomDrawer />}
      initialRouteName={initialRoute ? initialRoute : ScreenEnum.Home}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name={ScreenEnum.Home} component={HomeNavigation} />
      <Drawer.Screen
        name={ScreenEnum.PaymentStack}
        component={PaymentNavigation}
      />
      <Drawer.Screen
        name={ScreenEnum.ProfileStack}
        component={ProfileNavigation}
      />
      <Drawer.Screen
        name={ScreenEnum.CreateStation}
        component={CreateStation}
      />
      <Drawer.Screen
        name={ScreenEnum.SupportStack}
        component={SupportNavigatin}
      />
      <Drawer.Screen name={ScreenEnum.History} component={History} />
    </Drawer.Navigator>
  );
};
