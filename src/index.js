import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
}
