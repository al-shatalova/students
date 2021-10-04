import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../App';

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.item}>Третий экран</Text>
      <Button
        style={styles.item}
        title={'Назад'}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Screen3;
