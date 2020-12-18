import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const FlexDimensionsBasics = () => {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 3}}>
        <View style={{backgroundColor: 'white'}} />
          <Text style={{flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 18}}> 
              {"\n"}
              5 книжных новинок октября
            </Text>
          <View style={{backgroundColor: 'powderblue'}} />
            <Text style={styles.fst}> 
            {"\n"}
            Место для вашей рекламы
            </Text>
          <View style={{backgroundColor: 'skyblue'}} />
            <Text style={styles.sec}>
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
  fst: {
    flex: 2, 
    backgroundColor: 'powderblue', 
    textAlign: 'center', 
    padding: 12, 
    fontSize: 24
  },
  sec: {
    flex: 8, 
    backgroundColor: 'skyblue', 
    textAlign: 'center', 
    padding: 15
    }
  })
export default FlexDimensionsBasics;