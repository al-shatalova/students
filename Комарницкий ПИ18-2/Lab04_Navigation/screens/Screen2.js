import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../App';

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.item}>Второй экран</Text>
      <Button
        style={styles.item}
        title={'Назад'}
        onPress={() => navigation.goBack()}
      />
      <Button
        style={styles.item}
        title={'Третий экран'}
        onPress={() => navigation.navigate('Screen 3')}
      />
    </View>
  );
};

export default Screen2;
