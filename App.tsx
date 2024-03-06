import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from './app/navigation/AppNavigation';
import {ScreenEnum} from './app/utils/types';

function App() {
  return (
    <NavigationContainer>
      <AppNavigation initialRoute={ScreenEnum.Home} />
    </NavigationContainer>
  );
}

export default App;
