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
import CreateTeam from './android/app/src/pages/CreateTeam';
import Equipes from './android/app/src/pages/Equipes';
import Login from './android/app/src/pages/Login';
import Menu from './android/app/src/pages/Menu';
import EquipeInfo from './android/app/src/pages/EquipeInfo';
import EmployeeInfo from './android/app/src/pages/EmployeeInfo';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <EmployeeInfo/>
    </>
  );
};


export default App;