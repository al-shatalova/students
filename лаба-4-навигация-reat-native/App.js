import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#A9A9A9'}}>
      <Text style={{fontSize: 18, marginVertical: 10, marginLeft:20, textAlign:"center",marginRight:20,fontWeight: "bold"}}>
          Деятели культуры
          </Text>
      <Button
        title="Саят Нова"
        onPress={() => navigation.navigate('SecondScreen')}
      />
      <Button
        title="Комитас"
        onPress={() => navigation.navigate('ThirdScreen')}
      />
    </View>
  );
}
function SecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Сая́т-Нова́ (арм. Սայաթ-Նովա; груз. საიათ-ნოვა; азерб. Саjат Нова/Sayat Nova[4]; перс. صیاد نوا‎, араб. سايات نوفا‎), псевдоним Арутю́на Саядя́на[5] (арм. Հարութիւն Սայադյան) (1712—1795) — армянский[5][6] поэт и ашуг, мастер любовной лирики. </Text>
      <Button title="Вернуться на начальную страницу" onPress={() => navigation.goBack()} />
      <Image
      style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sayat-Nova_1964.jpg/411px-Sayat-Nova_1964.jpg',
        }}
      />
    </View>
  );
}

function ThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Комита́с (арм. Կոմիտաս), настоящее имя Согомо́н Кево́рк Согомоня́н (арм. Սողոմոն Գէորգ Սողոմոնեան; 26 сентября 1869, Кютахья, Османская империя — 22 октября 1935, Вильжюиф, Франция) — армянский композитор, музыковед, фольклорист, певец, хоровой дирижёр, священнослужитель Армянской церкви (вардапет). Благодаря трудам Комитаса, его научным исследованиям, усилиям по сохранению музыкального наследия и собственным музыкальным композициям, он стал источником большого вдохновения для армянских музыкантов и не-музыкантов</Text>
      <Button title="Вернуться на начальную страницу" onPress={() => navigation.goBack()} />
      <Image
      style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Komitas_1902.jpg',
        }}
      />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen}/>
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;