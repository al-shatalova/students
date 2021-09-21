import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Журнал Bright</Text>
            <View style={styles.nestedContainer}>
                <Text style={[styles.newsButton, styles.news]}>Новости</Text>
                <Image
                    source={{
                        uri: 'http://brightmagazine.ru/wp-content/uploads/2021/08/pexels-cottonbro-4009401-768x512.jpg',
                    }}
                    style={[styles.news, styles.newsImage]}
                />
                <Text style={[styles.news, styles.newsHeader]}>
                    Лучшие мини-сериалы для отпускных вечеров
                </Text>
                <Text style={[styles.news, styles.newsText]}>
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
        height: 200,
    },
    newsText: {
        paddingTop: '5%',
        fontSize: 16,
    },
});

export default App;
