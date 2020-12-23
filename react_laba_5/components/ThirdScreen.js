import * as React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Third extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Second')}>
          <Button
            title="ОТКРЫТЬ SECOND"
            onPress={() => this.props.navigation.navigate('Second')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 20 }}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Button
            style={{ margin: 20 }}
            title="ОТКРЫТЬ DRAWER"
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Third</Text>
      </View>
    );
  }
}
