import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function HeigthWidthComponent() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>5 книжных новинок октября</Text>
      </View>
      <View style={styles.firstBlockContainer}>
        <Text style={styles.firstBlockText}>
          «Кадиш.com» Натан Ингландер. {'\n'}
          Издательство «Книжки»
        </Text>
      </View>
      <View style={styles.secondBlockContainer}>
        <Text style={styles.secondBlockText}>
          Ироничная новелла Натана Ингландера, две личные истории культовой
          Патти Смит, репортаж британской журналистки о будущем человечества,
          дебютный роман Оушена Вуонга и журналистское расследование о создании
          «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных
          новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '100',
  },

  firstBlockContainer: {
    flex: 3,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstBlockText: {
    textAlign: 'center',
    fontSize: 20,
  },
  secondBlockContainer: {
    flex: 9,
    backgroundColor: '#b0b0b0',
    alignItems: 'center',
    paddingTop: 30,
    paddingRight: 15,
    paddingLeft: 15
  },
  secondBlockText: {
    fontSize: 16,
    textAlign: 'center'
  }
});
