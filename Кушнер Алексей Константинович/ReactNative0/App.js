import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';

const YourApp = () => {
  return(
    <View  style={{ flex:1, justifyContent: "center" , alignItems: "center"}}>
     <Text>
      Try editing me!
     </Text>
    </View>
  );
}
export default YourApp;