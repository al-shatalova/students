import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';

export default function StressNews({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Журнал Bright
      </Text>

      <View
        style={styles.container2}
      >
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text style={styles.title2}>
              Превращаем стресс в своего помощника
            </Text>
            <Image style={styles.img} resizeMethod='resize' resizeMode='cover' source={require('../assets/iimmgg.jpg')} />
            <Text style={styles.articleTop}>
                    Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса.
            </Text>
            <Text style={styles.articleContent}>
              На первый взгляд тот факт, что стресс можно использовать как возможность личностного роста и улучшения качества жизни звучит противоречиво. Однако исследователи из Йельского университета обнаружили, что люди, рассматривающие стресс как возможность развиваться, часто отмечают улучшение качества жизни, меньше количество симптомов депрессии и тревоги, более высокий уровень энергии и производительности на рабочем месте, чем те, кто рассматривает стресс исключительно как угрозу. Психологи в свою очередь добавляют, что то, как мы интерпретируем стресс, действительно влияет на наше здоровье больше, чем сам стресс. Как его интерпретируете вы?
            </Text>
            <Text style={styles.articleContent}>
              Чтобы изменить привычную манеру интерпретации стрессовых ситуаций, важно превратиться в исследователя и научиться замечать свои телесные ощущения во время стресса, свои привычные реакции. Для помощи в этом, мы собрали для вас три шага, которые рекомендует Келли МакГонигал, психолог и ведущий эксперт в области изучения взаимосвязи между психическим и физическим состояниями человека.
            </Text>
            <Text style={styles.articleContent}>
              {<Text style={styles.bold}>1 шаг.</Text>} Наблюдайте за своими телесными ощущения. Обострились ли ваши ощущения во время стрессового опыта? Как изменилось ваше дыхание и сердцебиение? Ваше внимание было сосредоточено на источниках стресса? Если это так, то ваши обостренные телесные ощущения напоминали, насколько важна эта ситуация для вас, предоставляя энергию, мотивацию и концентрацию, необходимые для решения проблемы. Вы можете рассматривать реакции своего тела во время стресса только как изнурительные, однако также можете посмотреть на них, как на напоминание о концентрации тела для решения возникшей проблемы.
            </Text>
            <Text style={styles.articleContent}>
              {<Text style={styles.bold}>2 шаг.</Text>} Обратить внимание на возникающую во время стресса необходимость побыть рядом с друзьями или семьей. Появилась ли у вас в этот момент острая чувствительность к эмоциям других? Если это так, то можно смело заявить, что стресс подтолкнул вас к общению с другими. Стресс может объединить нас с другими, ослабить наши индивидуальные страхи и повышать желание поддерживать близких.
            </Text>
            <Text style={styles.articleContent}>
              {<Text style={styles.bold}>3 шаг.</Text>} Попробуйте проанализировать чему вас научил стрессовый опыт. Даже когда проблема была решена и тело начало расслабляться, вы еще продолжали думать о ситуации? Или быть может вы обратились к кому-то, чтобы поговорить об этом? На первый взгляд кажется, что нам следует избегать обдумывания уже прошедшей ситуации, однако это тоже является частью процесса личностного роста и развития. Главное – чтобы обдумывание одной и той же ситуации не затягивалось надолго.
            </Text>
          </ScrollView>
        </View>

      </View>

      <Button
        title="На главную"
        onPress={() =>
          navigation.navigate('Main')
        }
        // color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '80vh',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    // backgroundColor: 'white',
    padding: 8,
    marginTop: Constants.statusBarHeight
  },
  container2: {
    backgroundColor: '#fff',
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: 495,
    overflow: 'hidden',
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: Constants.statusBarHeight
  },
  scrollView: {
    padding: 8,
    // flexGrow: 0,
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  articleTop: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  articleContent: {
    fontSize: 18,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  img: {
    width: '100',
    height: '5%',
    marginTop: 16,
    marginBottom: 16
  },
});
