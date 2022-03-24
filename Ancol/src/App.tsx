/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { setupStore } from './store';
import Toast from 'react-native-toast-message';
import { RootNavigator } from './navigation';

export const store = setupStore()

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
      <Toast />
    </Provider>
  );
};

 // export default App;