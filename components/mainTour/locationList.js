import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  locationPage: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  }
});

class LocationList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Text style={styles.locationPage}>Testing from Location List</Text>
    );
  }
}

export { LocationList };