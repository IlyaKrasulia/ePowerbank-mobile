import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './AuthNavigation';
import {ScreenEnum} from '../utils/types';
import {AppNavigation} from './AppNavigation';

export const NApp = () => {
  const authStatus = useSelector((state: RootState) => state.auth.auth);

  console.log(authStatus);

  return (
    <NavigationContainer>
      {authStatus ? (
        <AppNavigation />
      ) : (
        <AuthNavigation initialRoute={ScreenEnum.CreateProfile} />
      )}
    </NavigationContainer>
  );
};
