import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Alexander Tyurin' onPress={() => navigation.navigate('Alexander')}/>
      <View style={{marginVertical: 8}}></View>
      <Button title='Ivan Ivanov' onPress={() => navigation.navigate('Ivan')}/>
      <View style={{marginVertical: 8}}></View>
      <Button title='Go Home' onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

function AlexanderScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Alexander</Text>
      <Text>8(900) 000-00-00</Text>
      <View style={{marginVertical: 8}}></View>
      <Button title='Go to Details' onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}

function IvanScreen({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ivan</Text>
      <Text>8(900) 111-11-11</Text>
      <View style={{marginVertical: 8}}></View>
      <Button title='Go to Details' onPress={() => navigation.navigate('Details')}/>
    </View>
  )
}


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Alexander" component={AlexanderScreen} />
        <Stack.Screen name='Ivan' component={IvanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
