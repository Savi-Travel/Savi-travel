import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text> This is some text </Text>
        <Button onPress={() => {}} title="This is a button" />
      </View>
    );
  }
}

export default App;