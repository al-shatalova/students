import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import {DrawerNavigator } from 'react-navigation'

// You can import from local files
import Start from './components/Start';
import Second from './components/SecondScreen';
import Third from './components/ThirdScreen';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const MyDrawerNavigator = new DrawerNavigator(
  {
    Start: Start,
    Second: Second,
    Third: Third
  },
  {
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

export default MyDrawerNavigator;
