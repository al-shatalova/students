import React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'rgb(255, 255, 255)' }}> 
      <Text style = {styles.header}>
      5 книжных новинок октября
      </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'rgb(233, 233, 233)' }}>
      <Text style = {styles.regularText}>
      «Кадиш.com» Натан Ингландер. Издательство «Книжники»
      </Text>
      < /View>
      <View style={{ flex: 3, backgroundColor: 'rgb(147, 147, 147)' }}>
      <Text style={[styles.regularText, {fontSize:14}]}>
      Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистики о будущем человечеста, дебютный роман Оушена Вуонга и журалистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающийх книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text>
      < /View>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    marginTop: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerMain: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26
  },
  regularText: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    fontSize: 18
  },
});



export default FlexDimensionsBasics;
