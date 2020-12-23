import * as React from 'react';
import { Button,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Third  from './ThirdScreen';

export default class Second extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
        <Button
          title="ОТКРЫТЬ DRAWER"
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Second</Text>
      </View>
    );
  }
}

