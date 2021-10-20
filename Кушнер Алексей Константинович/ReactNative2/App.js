import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, backgroundColor: '#FFFFFF',textAlign:"center",justifyContent:"flex-end"}}>
        <Text style={{fontWeight:"bold",fontSize:18,marginBottom:5, textAlign:"center"}}>
          Ян Непомнящий - чемпион России
        </Text>
      </View>
      <View style={{flex: 5, backgroundColor: '#D3D3D3',textAlign:"center",justifyContent:"flex-start"}}>
        <Text style={{marginTop:30,fontSize:18, textAlign:"center"}}>
          Дубов: "Карякин молодец. У меня смешанные чувства..."
        </Text>
      </View>
      <View style={{flex: 25, backgroundColor: '#A9A9A9',textAlign:"center",justifyContent:"flex-start"}}>
        <Image source={require("./Yan2.jfif")} style={{marginTop:30,marginLeft:40, width:300,height:150}} />
        <Text style={{marginTop:30,fontSize:15, textAlign:"center"}}>
         Практически всю дистанцию Суперфинала Ян Непомнящий и Сергей Карякин спорили, кто из них более достоин звания чемпиона России. Как десять лет назад, когда эти же двое разыграли титул на тай-брейке.
        </Text>
      </View>
    </View>
  );
}