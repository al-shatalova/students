import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState();

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 2 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}

class  MainComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: ''};

    // this.handleChange = this.handleChange.bind(this);
    this.pressButton = this.pressButton.bind(this);
  }

  pressButton(){
    alert(String.prototype.concat("Hello, ", this.state.name, "))"))
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>
          Hello, User, please enter your name below
        </Text>
        <TextInput style={{height: 40, borderColor: 'grey', borderWidth: 2}}
          placeholder='Name' value={this.state.name} onChangeText={(value) => this.setState({name: value})}/>
        <View style={{marginVertical: 8}}></View>
        <Button title="Press me" onPress={this.pressButton}/>
      </View>
    )
  }
}

export default function App() {
  return (
    <MainComponent/>
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
