import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { Linking } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    //paddingTop: Constants.statusBarHeight,
    margin: 24,
    fontWeight: 'bold',
    fontSize: 18,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  main: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
  }
});

const YourApp = () => {
  return (
    <View style = {{ flex: 1}}>
      <View style = {{ flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.logo}>
        Феноменоло́гия
        </Text>
      </View>
      <View style = {{ flex: 2, backgroundColor: 'lightgray'}}>
        <Text style={styles.paragraph}>
        Феноменоло́гия (нем. Phänomenologie - «учение о феноменах») — идеалистическое[источник не указан 67 дней] направление в философии XX века, определявшее свою задачу как беспредпосылочное описание опыта познающего сознания и выделение в нём сущностных черт.
        </Text>
      </View>
      <View style = {{ flex: 3, backgroundColor: 'gray'}}>
        <Text style={styles.main}>
        Феноменология началась с тезиса Гуссерля «Назад, к самим вещам!», который противопоставляется распространенным в то время призывам «Назад, к Канту!», «Назад, к Гегелю!» и означает необходимость отказаться от построения дедуктивных систем философии, подобных гегелевской, а также от редукции вещей и сознания к каузальным связям, изучаемым науками. Феноменология, таким образом, предполагает обращение к первичному опыту, у Гуссерля — к опыту познающего сознания, где сознание понимается не как эмпирический предмет изучения психологии, но как «трансцендентальное Я» и «чистое смыслообразование» (интенциональность).
        </Text>
      </View>
    </View>
  );
}

export default YourApp;


