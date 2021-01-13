import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const styles=StyleSheet.create(
{
  FootballImage:{height:250,width: 270},
  glavView:{backgroundColor: "#ECF0F1", width:"100%",height:"100%",paddingTop:20},
  zagolovok:{textAlign:"center",fontWeight:"bold",fontSize:16,marginLeft:10,marginBottom:10},
  FootballView:{backgroundColor: "#FFF",padding:5,marginLeft:10},
  FootballText1:{color:"#2837FF",padding:7,marginBottom:10,marginTop:10,marginLeft:10},
  FootballText2:{color:"black",fontSize:20,fontWeight:"bold",padding:3,marginLeft:10,marginTop:10}
});

export default function App() {
  return (
      <View style={styles.glavView}>
        <Text style={styles.zagolovok}>
          Журнал MyFootball
        </Text>
        <View style={styles.FootballView}>
          <Text style={styles.FootballText1}>
            Новости
          </Text>
          <View style={{alignContent:"center",alignItems:"center"}}>
            <Image style={styles.FootballImage} source={require('./Lampard.jpg')} />
          </View>
          <Text  style={styles.FootballText2}>
            Гвардиола одерживает сокрушительную победу над Челси
          </Text>
          <Text style={{marginLeft:13,marginTop:10}}>
            3 Явнаря Манчестер Сити под руководством Пепа Гвардиолы уничтожает Челси Френка Лэмпарда еще в первом тайме. К перерыву счет был 3:0. Однако подопечным Лэмпарда удалось немного размочить счет во втором тайме. В итоге, к сожалению, полностьь закономерная победа Пепа над Френком.  
          </Text>
        </View>
      </View>
    );
}
