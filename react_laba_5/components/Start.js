import * as React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Start extends React.Component {
  static navigationOptions = {
    headerTitle: 'First screen',
  };
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
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Start</Text>
      </View>
    );
  }
}