import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/vine.jpg')} />
      <Text style={styles.title}>
        6 секретов для знакомства с винным миром, не выходя из дома
      </Text>
      <Text style={styles.mainText}>
        Чтобы насладиться идеальной дегустацией вина в домашних условиях, нет необходимости быть экспертом винного мира. Достаточно иметь качественное вино, охлажденное до нужной температуры, правильные бокалы и знать пару простых секретов, благодаря которым процесс откроется для вас совершенно по-другому.
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
    margin: 16,
    marginTop: 0,
    fontSize: 12,
    textAlign: 'left',
    color: 'blue'
  },
  logo: {
    height: 128,
    width: 256,
  },
  title: {
    margin: 16,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  mainText: {
    margin: 16,
    marginTop: 0,
    fontSize: 14,
    textAlign: 'left'
  }
});
