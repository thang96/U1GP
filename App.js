import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {NativeModules} from "react-native";
import SplashScreen from 'react-native-splash-screen';
import store from './src/store';
import MainNavigator from './src/navigators/MainNavigator';

const {UIManager} = NativeModules;

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App: () => Node = () => {
  React.useEffect(() => {});
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
