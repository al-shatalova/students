import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexDimensionsBasics = () => {
    return (
        <View style={styles.first}>
            <View style={styles.first}>
                <Text style={[styles.text, styles.bold]}>
                    Девять привычек, чтобы почувствовать себя более счастливым
                </Text>
            </View>
            <View style={styles.second}>
                <Text style={[styles.text, styles.font]}>
                    Журнал Bright, Текст: Аделя Гарифзянова
                </Text>
            </View>
            <View style={styles.third}>
                <Text style={styles.text}>
                    Многие считают, что достижение счастья – это усилие, которое длится
                    всю жизнь. Но ведь счастье уже ждет каждого из нас в каждом моменте,
                    надо только заметить и погрузиться в него. Мы собрали для вас девять
                    привычек, которые помогут почувствовать себя более счастливым.
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

export default FlexDimensionsBasics;
