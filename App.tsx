import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import {NApp} from './app/navigation/NApp';

function App() {
  return (
    <Provider store={store}>
      <NApp />
    </Provider>
  );
}

export default App;
