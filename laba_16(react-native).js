import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Linking } from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainLogo}> 
        Журнал Bright 
      </Text>
      <View style={styles.main}>
        <Text>
          Новости
        </Text>
        <Image
           style={styles.picture}
            source={{
              uri: 'http://brightmagazine.ru/wp-content/uploads/2020/11/pexels-andrea-piacquadio-3839098-1024x683.jpg',
            }}
        />
        <Text style={styles.logo}> 
          Превращаем стресс в своего помощника
        </Text>
        <Text style={styles.justText}> 
          Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  href: {
    marginLeft: 25,
    fontSize: 12,
    marginBottom: 30,
    marginTop: 30,
    color: 'blue'
  },
  picture: {
    width: 240,
    height: 120,
    marginLeft: 25,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 25,
    marginRight: 20,
    marginTop: 18
  },
  main: {
    backgroundColor: "white",
    borderRadius: 3
  }, 
  mainLogo: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10
  },
  justText: {
    marginTop: 15,
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 30
  }
});