import React, {useState} from 'react';
import {Button, Image, Pressable, StyleSheet, Text, View} from 'react-native';

const CustomButton = ({onPress, title}) => {
    return (
        <Pressable style={styles.refreshButton} onPress={onPress}>
            <Text style={styles.refreshText}>{title}</Text>
        </Pressable>
    );
};

const Lab3 = () => {
    const catUrl = 'https://thiscatdoesnotexist.com/';
    const [imageHash, setImageHash] = useState(Date.now());

    const reloadCat = () => {
        setImageHash(Date.now());
    };

    return (
        <View>
            <Text style={styles.header}>Просто генератор котиков</Text>
            <Image source={{uri: `${catUrl}?${imageHash}`}} style={styles.img} />
            <CustomButton title={'Хочу другого кота!'} onPress={reloadCat} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        alignSelf: 'center',
        padding: 16,
        paddingTop: 32,
        paddingBottom: 32,
    },
    img: {
        width: 300,
        height: 300,
        margin: 16,
        alignSelf: 'center',
    },
    refreshButton: {
        marginTop: 64,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    refreshText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Lab3;
