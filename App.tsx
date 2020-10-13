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
import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';

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
import Teams from './android/app/src/pages/Teams';
import Login from './android/app/src/pages/Login';
import Menu from './android/app/src/pages/Menu';
import TeamInfo from './android/app/src/pages/TeamInfo';
import EmployeeInfo from './android/app/src/pages/EmployeeInfo';
import Conquest from './android/app/src/pages/Conquest';

// import Routes from './android/app/src/routes';

const App = () => {
  return (
      <Menu/>
  );
};

export default App;