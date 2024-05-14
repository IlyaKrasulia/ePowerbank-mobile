import React from 'react';
import {ScreenEnum, StackParamList} from '../utils/types';
import {Home} from '../screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from '../components/CustomDrawer';

interface IProps {
  initialRoute?: keyof StackParamList;
}

const Drawer = createDrawerNavigator<StackParamList>();

export const AppNavigation: React.FC<IProps> = ({initialRoute}) => {
  return (
    <Drawer.Navigator
      drawerContent={_ => <CustomDrawer />}
      initialRouteName={initialRoute || ScreenEnum.Home} // Provide a default value if initialRoute is not specified
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name={ScreenEnum.Home} component={Home} />
    </Drawer.Navigator>
  );
};
