import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen
                        options={{ title: 'Jane' }}
                        name="Profile1"
                        component={ProfileScreen} />
                    <Stack.Screen
                        options={{ title: 'Peter' }}
                        name="Profile2"
                        component={ProfileScreen} />
                    <Stack.Screen
                        options={{ title: 'Rose' }}
                        name="Profile3"
                        component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.paragraph}>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigation.navigate('Profile1', { name: 'Jane', number: '8-800-555-35-35' })
                    }
                />
            </Card>
            <Card style={styles.paragraph}>
                <Button style={styles.paragraph}
                    title="Go to Peter's profile"
                    onPress={() =>
                        navigation.navigate('Profile2', { name: 'Peter', number: '8-916-521-33-31' })
                    }
                />
            </Card>
            <Card style={styles.paragraph}>
                <Button style={styles.paragraph}
                    title="Go to Rose's profile"
                    onPress={() =>
                        navigation.navigate('Profile3', { name: 'Rose', number: '8-912-531-25-55' })
                    }
                />
            </Card>
        </View>
    );
};
const ProfileScreen = ({ navigation, route }) => {
    return (
        <View>
            <Card style={styles.name}>
                <Text style={styles.name}>This is {route.params.name}'s profile</Text>
            </Card>
            <Card>
                <Text style={styles.number}>Phone number:</Text>
            </Card>
            <Card>
                <Text style={styles.number}>{route.params.number}</Text>
            </Card>
            <Card style={styles.paragraph}>
                <Button title="Call" onPress={() => { navigation.popToTop(); }} />
            </Card>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        padding: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    number: {

        padding: 24,
        fontSize: 18,
        textAlign: 'center',
    },
    name: {
        padding: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
