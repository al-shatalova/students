import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';

export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Журнал Bright
      </Text>

      <View style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
      }}>
        <View style={styles.container2}>
            <Text style={styles.news}>Новости</Text>
            <Image style={styles.img} resizeMethod='resize' resizeMode='cover' source={require('../assets/iimmgg.jpg')} />
            <Text style={styles.title2}>
              Превращаем стресс в своего помощника
            </Text>
            <Text style={styles.article}>
              Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
            </Text>
        </View>
      </View>

      <Button
        title="К новости"
        onPress={() =>
          navigation.navigate('StressNews')
        }
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: Constants.statusBarHeight
  },
  // container: {
  //   backgroundColor: 'white',
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   // maxHeight: 495,
  //   // height: '100vh',
  // },
  container2: {
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
