import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.news}>Новости</Text>
      <Image style={styles.logo} source={require('../assets/lichnyj-psiholog.jpg')} />
      <Text style={styles.header}>Превращаем стресс в своего помощника</Text>
      <Text style={styles.paragraph}>
        Исследователи Йельского университета заявляют, что люди, которые
        рассматривают стресс, как возможность личностного роста, отмечают
        улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть
        положительные стороны стресса.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  paragraph: {
    // margin: 24,
    marginTop: 0,
    adjustsFontSizeToFit: true,
    fontSize: 14,

    // textAlign: 'center',
    alignSelf: 'flex-start',
  },
  header: {
    marginTop: 24,
    marginBottom: 24,
    fontWeight: 'bold',
    fontSize: 24,
  },
  news: {
    marginBottom: 20,
    // textAlign: 'left',
    color: 'blue',
  },
  logo: {
    flex: 1,
    // resizeMode: 'stretch',
    // resizeMethod: 'scale',
    height: 150,
    width: 260,
  },
});
