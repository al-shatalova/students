import React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



const LotsOfStyles = () => {
  return (
    <View style={styles.back}>
    <View >
    <Text style={styles.header}>Журнал Bright</Text>
    </View>
    <View style={styles.container}>
    <Text style={styles.headerLow}>Новости</Text>
    <Image style = {styles.picture}
        source={{
          uri: 'https://i.pinimg.com/564x/a5/be/3d/a5be3d83f75c97b4cc87dffe5ae169ae.jpg',
        }}
      />
    <Text style={[styles.headerMain]}>Превращаем стресс в своего помощника</Text>
    <Text style={styles.regularText}>Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшения качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.</Text>
    </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor:'rgba(240, 239, 240,1)'
  },
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 300,
    backgroundColor:'rgba(255, 255, 255, 1)',
    borderRadius: 7},
  header: {
    marginTop: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  picture: {
    marginTop: 40,
    marginLeft: 20,
    width: 300,
    height: 180,
  },
  headerLow: {
    marginTop: 40,
    marginLeft: 20,
    color:'rgba(90, 9, 231, 1)'
  },
  headerMain: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 26
  },
  regularText: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 16
  },
});



export default LotsOfStyles;
