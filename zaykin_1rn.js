import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Журнал Bright
      </Text>
      <Card style={styles.card}>
      <Text style={styles.blue}>Новости</Text>
      <View style={styles.img}>
      <Image style={styles.logo} resizeMethod="resize" resizeMode="cover" source={require('/assets/stress.jpg')}/>
      </View>
      <Text style={styles.header}>Превращаем стресс в своего помощника</Text>
      <Text style={styles.partext}>
      Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
      </Text>
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
  },
  paragraph: {
    margin: 4,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {

  },
  header: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  },
    logo: {
    height: 128,
    width: 256,
  },
  img: {
    marginLeft: 24,
    justifyContent: 'center',
    alignContent: 'center'
  },
   blue: {
    textAlign: "left",
    margin: 24,
    color: 'blue'
  },
  partext: {
    textAlign: "left",
    margin: 24,
    marginTop: 0,
    marginEnd: 48
  }
});
