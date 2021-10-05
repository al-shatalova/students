import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.first}>
            <View style={styles.first}>
                <Text style={[styles.text, styles.bold]}>
                    Лучшие мини-сериалы для отпускных вечеров
                </Text>
            </View>
            <View style={styles.second}>
                <Text style={[styles.text, styles.font]}>
                    20.08.2021
                    <br />
                    Мнения, Опыт
                </Text>
            </View>
            <View style={styles.third}>
                <Text style={styles.text}>
                    Часто сериалы ассоциируются у нас с долгой историей или циклом
                    историй. Но сейчас также в моде мини-сериалы, которые можно посмотреть
                    полностью всего лишь за один день. Мы собрали для вас лучшие из них,
                    чтобы вы могли насладиться захватывающей историей в отпуске.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    first: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 'auto',
    },
    second: {
        flex: 2,
        backgroundColor: '#e5e5e5',
    },
    third: {
        flex: 6,
        backgroundColor: '#aaa',
    },
    text: {
        margin: 'auto',
        justifyContent: 'center',
        textAlign: 'center',
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    bold: {
        fontWeight: 'bold',
    },
    font: {
        fontSize: '18',
    },
});

export default App;
