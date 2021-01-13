import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles=StyleSheet.create(
{
  FootballView:{flex: 3, backgroundColor: '#FFFFFF',textAlign:"center",justifyContent:"flex-end"},
  FootballView1: {flex: 10, backgroundColor: '#D3D3D3',textAlign:"center",justifyContent:"flex-start"},
  FootballView2: {flex: 25, backgroundColor: '#A9A9A9',textAlign:"center",justifyContent:"flex-start"},
  FootballText: {fontWeight:"bold",fontSize:18,marginBottom:5, textAlign:"center"}
});

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.FootballView}>
        <Text style={styles.FootballText}>
          Новости MyFootball
        </Text>
      </View>
      <View style={styles.FootballView1}>
        <Text style={{marginTop:30,fontSize:18, textAlign:"center"}}>
          Гвардиола одерживает сокрушительную победу над Челси
        </Text>
      </View>
      <View style={styles.FootballView2}>
        <Text style={{marginTop:30,fontSize:15, textAlign:"center"}}>
         3 Явнаря Манчестер Сити под руководством Пепа Гвардиолы уничтожает Челси Френка Лэмпарда еще в первом тайме. К перерыву счет был 3:0. Однако подопечным Лэмпарда удалось немного размочить счет во втором тайме. В итоге, к сожалению, полностьь закономерная победа Пепа над Френком.
        </Text>
      </View>
    </View>
  );
}
