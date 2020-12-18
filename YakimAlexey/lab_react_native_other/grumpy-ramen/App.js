import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';
import Preview from './components/Preview';
import Entire from './components/Entire';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [more, setMore] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Журнал Bright
      </Text>
      
      <View style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
      }}>
        {!more && <Preview />}
        {more && <Entire />}
      </View>

      <Button
        onPress={() => {setMore(!more)}}
        title={more ? "Показать меньше" : "Показать больше"}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: Constants.statusBarHeight
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
