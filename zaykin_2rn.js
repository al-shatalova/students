import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph0}>
                5 книжных новинок октября
    </Text>
            <Text style={styles.paragraph1}>
                "Кадиш.com" Натан Игландер. Издательство "Книжники"
      </Text>
            <Text style={styles.paragraph2}>
                Ироничная новелла Натана Игландера, две личные истории Патти Смит, репортаж британской журналистки и будущемчеловечества, дебютный роман Оушена Вуонга и журналистское расследрвание о создании "Моссада". В нашей подборке рассказываем о пяти захватывающих книжных новинках, которые достойны того, чтобы появиться на ваших полках.
      </Text>
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
    paragraph0: {
        fontSize: 22,
        flex: 1,
        marginTop: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    paragraph1: {
        fontSize: 18,
        flex: 2,
        paddingTop: 24,
        padding: 8,
        textAlign: 'center',
        backgroundColor: 'lightgrey'
    },
    paragraph2: {
        fontSize: 15,
        flex: 8,
        padding: 8,
        paddingTop: 24,
        textAlign: 'center',
        backgroundColor: 'darkgrey'
    }
});
