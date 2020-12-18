import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,  View, TextInput, Image, Button, Alert, Linking  } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>
      Ценный питательный овощ с высоким содержанием крахмала. Вкус – характерный, мягкий. Сорта отличаются формой и размером клубней, цветом кожуры и среза, вкусом. Для картофеля употребимо такое понятие как рассыпчатость. Содержит пищевые волокна, микро- и макроэлементы, витамины. Рекомендован для здорового и диетического питания.

Подают как отдельный гарнир к мясу, рыбе, птице. Используют для приготовления первых блюд, салатов, рагу, запеканок, пюре. Особенно вкусен в обжаренном виде, лидер продаж в сфере питания – картофель фри. Хорошо сочетается с овощами, специями, грибами, соленой капустой. Подчеркивают вкус сливочное масло, майонез, соусы.
</Text>
<Image
      style={styles.potato}
        source={{
          uri: 'https://lh3.googleusercontent.com/proxy/n95y7rJfH24lK1ijIYYRbCuh_2-g4yUl9e22pycdfmaL2b1BoUYGHLRw076kcqHBB3g2C-2KR4sb4BJBkzmoSc6Q_G62RqkEkBoRumS9SWKlFQ',
        }}
      />
      <Button
        title="Купить картошку"
        color="#f194ff"
        onPress={ ()=>{ Linking.openURL('https://google.com')}}
      />
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  potato: {
    marginTop: 10,
    width: 315,
    height: 300,
    marginBottom: 10,
  },
  
});
