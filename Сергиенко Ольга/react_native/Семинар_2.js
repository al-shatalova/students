import React from 'react';
import { Text, View } from 'react-native';

const FlexDimensionsBasics = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: "center" , alignItems: "center"}} >
        <Text>
        Hello 
      </Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'cornflowerblue', justifyContent: "center" , alignItems: "center"}}>
        <Text>
        World
      </Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'red', justifyContent: "center" , alignItems: "center"}} >
        <Text>
        !
      </Text>
        </View>
      </View>
    );
};

export default FlexDimensionsBasics;