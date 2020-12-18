import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample1() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 10,
    textAlign: 'center',
  }
});
