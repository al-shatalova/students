import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Журнал Bright</Text>
            <View style={styles.nestedContainer}>
                <Text style={[styles.newsButton, styles.news]}>Новости</Text>
                <Image
                    source={require('./res/img.jpeg')}
                    style={[styles.news, styles.newsImage]}
                />
                <Text style={[styles.news, styles.newsHeader]}>
                    Девять привычек, чтобы почувствовать себя более счастливым
                </Text>
                <Text style={[styles.news, styles.newsText]}>
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
    heading: {
        fontWeight: 'bold',
        paddingTop: '10%',
        alignSelf: 'center',
        fontSize: 24,
        paddingBottom: '1%',
    },
    container: {
        backgroundColor: '#e5e5e5',
        width: '100%',
        height: '100%',
    },
    nestedContainer: {
        backgroundColor: '#fff',
        width: '96%',
        height: '84%',
        margin: '2%',
        borderRadius: 5,
    },
    news: {
        paddingStart: '10%',
        paddingTop: '10%',
        paddingEnd: '10%',
    },
    newsButton: {
        color: 'blue',
        fontSize: 18,
        paddingBottom: '10%',
    },
    newsHeader: {
        fontWeight: 'bold',
        paddingTop: '5%',
        fontSize: 28,
    },
    newsImage: {
        width: '80%',
        alignSelf: 'center',
        maxHeight: 200,
    },
    newsText: {
        paddingTop: '5%',
        fontSize: 16,
    },
});

export default LotsOfStyles;
