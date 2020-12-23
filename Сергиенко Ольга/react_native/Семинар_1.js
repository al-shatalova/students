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
        <Text style={styles.href}>
          Новости
        </Text>
        <Image
           style={styles.picture}
            source={{
              uri: 'http://brightmagazine.ru/wp-content/uploads/2020/10/pexels-tophee-marquez-2947917-600x400.jpg',
            }}
        />
        <Text style={styles.logo}> 
          5 книжных новинок октября
        </Text>
        <Text style={styles.justText}> 
          Ироничная новелла Натана Ингландера, две личные истории культовой Патти Смит, репортаж британской журналистки о будущем человечества, дебютный роман Оушена Вуонга и журналистское расследование о создании «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e6e8e8',
    padding: 8,
  },
  mainLogo: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 10
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 25,
    marginRight: 20,
    marginTop: 18
  },
  href: {
    marginLeft: 25,
    fontSize: 12,
    marginBottom: 30,
    marginTop: 30,
    color: 'blue'
  },
  picture: {
    width: 310,
    height: 150,
    marginLeft: 25,
  },
  main: {
    backgroundColor: "white",
    borderRadius: 3
  }, 
  
  justText: {
    marginTop: 15,
    marginLeft: 25,
    marginRight: 20,
    marginBottom: 30
  }
});