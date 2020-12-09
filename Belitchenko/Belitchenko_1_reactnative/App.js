import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
// import rock from './assets/rock.jpg'; // Tell webpack this JS file uses this image

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Журнал Dark</Text>
      <Card>
        <Text style={styles.blue}>Философия</Text>
        <Image style={styles.main} source={require('./assets/rock.jpg')} />​​​
        <Text style={styles.main}>Воля к власти</Text>
        <Text style={styles.massive}>
          ВОЛЯ К ВЛАСТИ – центральное понятие в философии позднего Ф.Ницше. В
          1901, через год после его смерти, П.Гастом с братьями Э. и
          А.Хорнэфферами была опубликована книга «Воля к власти», анонсированная
          как «главное произведение Ницше». Книга вышла как очередной, 15-й, том
          Собрания сочинений и должна была по первоначальному замыслу издателей
          быть продолжением предыдущих шести томов, объединенных общим рабочим
          заглавием «Неизданное» (с указанием времени возникновения и завершения
          публикуемого текста). Под давлением сестры философа и руководительницы
          архива, Элизабет Ферстер-Ницше, заглавием тома стало: «Воля к власти.
          Опыт переоценки всех ценностей (исследования и фрагменты)». Решение
          носило чисто прагматический характер, отвечающий общей мифотворческой
          стратегии архива представить публике Ницше в качестве систематика
          (вопреки его собственному афоризму из «Сумерек идолов»: «Я не доверяю
          всем систематикам и сторонюсь их. Воля к системе есть недостаток
          честности». – Собр. соч., т. 2. М., 1990, с. 560).
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  massive: {
    margin: 24,
    fontSize: 14,
    textAlign: 'left',
  },
  main: {
    marginTop: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blue: {
    margin: 24,
    fontSize: 14,
    color: 'blue',
    padding: 8,
  },
});
