import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TextInput,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.card1}>
            Unlike the more generic ScrollView, the following list view
            components only render elements that are currently showing on the
            screen. This makes them a performant choice for displaying long
            lists of data.
            <Image
              style={styles.logo}
              source={require('./assets/snack-icon.png')}
            />
          </Text>
        </ScrollView>
      </Card>
      <Card>
        <Text style={styles.card2}>
          You can simply click and drag inside a wheel to adjust that range’s
          color, then use the master dial below the wheel to change its overall
          level. This palette also has adjustment controls, primary bars and log
          controls.
        </Text>
        <Text style={styles.card2}>
          <Button
            buttonStyle={styles.button}
            title="Press me"
            onPress={() => Alert.alert('Button pressed')}
          />
        </Text>
      </Card>
      <Card>
        <TextInput 
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
      // onChangeText={text => onChangeText(text)}
      // value={value}
    />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    width: 250,
  },
  card1: {
    width: 185,
    height: 100,
    margin: 5,
    fontSize: 20,
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: 128,
  },
  card2: {
    margin: 5,
    fontSize: 10,
    textAlign: 'center',
  },
  card3: {
    margin: 5,
    fontSize: 10,
    textAlign: 'center',
  },
});
