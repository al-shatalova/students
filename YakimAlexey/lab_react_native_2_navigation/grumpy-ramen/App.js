import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';
import Main from './components/Main';
import StressNews from './components/StressNews';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  const [more, setMore] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Безграничные новости',
            headerStyle: {
              backgroundColor: '#E6E7F6',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen 
          name="StressNews" 
          component={StressNews}
          options={{
            title: 'Победим стресс',
            headerStyle: {
              backgroundColor: '#3DA0FF',
            },
            headerTintColor: '#fff',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text style={styles.title}>
    //     Журнал Bright
    //   </Text>
      
    //   <View style={{
    //     flex: 1,
    //     overflow: 'hidden',
    //     backgroundColor: 'white',
    //   }}>
    //     // {!more && <Preview />}
    //     {more && <Entire />}
    //   </View>

    //   <Button
    //     onPress={() => {setMore(!more)}}
    //     title={more ? "Показать меньше" : "Показать больше"}
    //     color="#841584"
    //     accessibilityLabel="Learn more about this purple button"
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    marginTop: Constants.statusBarHeight
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
