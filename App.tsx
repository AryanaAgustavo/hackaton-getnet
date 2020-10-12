/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MenuItensList from './android/app/src/components/MenuItensList';
import Login from './android/app/src/pages/Login';
import Menu from './android/app/src/pages/Menu';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <Menu/>
    </>
  );
};


export default App;