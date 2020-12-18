import React, { useState } from "react";
import { View, Switch, StyleSheet, Button, Alert, Image } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Привет",
      "Как дела?",
      [
        {
          text: "Отлично",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Замечательно", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.switchContainer}>
      <Button
        title="Нажми меня"
        onPress={createTwoButtonAlert}
      />
      <Switch
        trackColor={{ false: "#767577", true: "#c7ffcb" }}
        thumbColor={isEnabled ? "#8181ff" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {isEnabled && <Image style={styles.logo} source={require('./assets/cat.png')}/> }
      {!isEnabled && <Image style={styles.logo}/>  }
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
        // flex: 1,
    height: 150,
    width: 260,
  }
});

export default App;
