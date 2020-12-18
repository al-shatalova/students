import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample1 from './components/AssetExample1';
import AssetExample2 from './components/AssetExample2';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        5 книжных новинок октября
      </Text>
      <Card style={styles.card1}>
        <AssetExample1 />
      </Card>
      <Card style={styles.card2}>
        <AssetExample2 />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#11111',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card1: {
    borderRadius: 1,
    backgroundColor: '#D3D3D3'
  },
  card2: {
    borderRadius: 1,
    backgroundColor: '#A9A9A9'
  }
});
