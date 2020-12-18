import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';

export default function Preview() {
  return (
    <View style={styles.container}>
        <Text style={styles.news}>Новости</Text>
        <Image style={styles.img} resizeMethod='resize' resizeMode='cover' source={require('../assets/iimmgg.jpg')} />
        <Text style={styles.title2}>
          Превращаем стресс в своего помощника
        </Text>
        <Text style={styles.article}>
          Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    padding: 16,
    flexDirection: 'column'
  },
  news: {
    color: 'blue',
    fontSize: 14
  },
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  article: {
    fontSize: 18,
  },
  img: {
    width: '100',
    height: '30%',
    marginTop: 16,
    marginBottom: 16
  },
});
