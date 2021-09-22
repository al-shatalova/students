import React from 'react';
import {StyleSheet, Text, View, Button, onPressLearnMore} from 'react-native';



const FlexDimensionsBasics = () => {
    return (
        <View style={styles.i}>
            <View style={styles.i}>
                <Text style={[styles.text, styles.bold]}>
                    Профессиональная дружба на века: Мерил Стрип и ее парикмахер
                </Text>
            </View>
            <View style={styles.i2}>
                <Text style={[styles.text, styles.font]}>
                    Журнал Bright, 
                    Текст: Аделя Гарифзянова
                </Text>
            </View>
            <View style={styles.i3}>
            
                <Text style={styles.text}>
                    Дружба и доверие вот уже 46 лет связывает оскароносную актрису Мерил Стрип и ее парикмахера Дж. Роя Хелланда. Такую дружбу в Голливуде встретишь совсем не часто, поэтому мы захотели поделиться этой историей с вами. 
                </Text>
                <Button
  onPress={onPressLearnMore}
  title="читать далее"
  color="black"
  
/>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
  
    i: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 'auto',
    },
    i2: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    i3: {
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
        fontSize: '15',
    },
});

export default FlexDimensionsBasics;