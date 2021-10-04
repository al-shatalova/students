import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { styles } from "../App";

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.item}>Первый экран</Text>
      <Button
        style={styles.item}
        title={'Перейти на второй экран'}
        onPress={() => navigation.navigate('Screen 2')}
      />
    </View>
  );
};

export default Screen1;
