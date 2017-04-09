import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Navigator
} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  }
});

const dummyData = [

];

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.logo}>Savi Travel</Text>
      </View>
    );
  }
}

export { HomePage };