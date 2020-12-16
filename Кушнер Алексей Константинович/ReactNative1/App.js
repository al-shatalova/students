import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constants from 'expo-constants';
const Chess = () => {
    return (
      <View style={styles.glavView}>
        <Text style={styles.zagolovok}>
          Журнал Chess
        </Text>
        <View style={styles.chessView}>
          <Text style={styles.chessText}>
            Новости
          </Text>
          <View style={{alignContent:"center",alignItems:"center"}}>
          <Image style={styles.chessImage} source={require('./Carlsen.jpg')} />
          </View>
          <Text  style={styles.chessText2}>
            Опять победил?
          </Text>
          <Text style={{marginLeft:13,marginTop:10}}>
            Магнус Карлсен вновь стал лучшим на последнем ЧМ по шахматам!
          </Text>
        </View>
      </View>
    );
};
const styles=StyleSheet.create(
{
  chessImage:{height:250,width: 270},
  glavView:{backgroundColor: "#ECF0F1", width:"100%",height:"100%",paddingTop:20},
  zagolovok:{textAlign:"center",fontWeight:"bold",fontSize:16,marginLeft:10,marginBottom:10},
  chessView:{backgroundColor: "#FFF",padding:5,marginLeft:10},
  chessText:{color:"#2837FF",padding:7,marginBottom:10,marginTop:10,marginLeft:10},
  chessText2:{color:"black",fontSize:20,fontWeight:"bold",padding:3,marginLeft:10,marginTop:10}
});

export default Chess;

