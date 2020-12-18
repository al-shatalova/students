import React from 'react';
import {Image, View, Button, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Separator = () => (
  <View style={styles.separator} />
);
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Баскетбол (англ. basket «корзина» + ball «мяч») — спортивная командная игра с мячом, в которой мяч забрасывают руками в корзину (кольцо) соперника.
        </Text>
        <Separator />
        <View style={styles.containeri}>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://pic.sport.ua/images/news/0/10/162/orig_432465.jpg',
        }}
      />

    </View>

        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </ScrollView>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: '#efdecd',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  containeri: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});

export default App;