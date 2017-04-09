import React, { Component } from 'react';
import {
  Text,
  Button,
  View
} from 'react-native';
import { HomePage } from './mainTour/homePage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <HomePage />
      </View>
    );
  }
}

export default App;