import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('')

  const textOutput = function() {
    if (name) {
      return 'You already wrote you name below!!!'
    }
    return 'Input your Name below';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hellow, World!
      </Text>
      <Text style={styles.paragraph}>
        {textOutput()}
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 12,
    fintSize: 18,
    fontWeight: 'bold',
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
  },
});
