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
      <View>
        <Text style={styles.locationPage}>Testing from Location List</Text>
        <Button onPress={() => {this.props.nav(0)}} title="Go to home" />
      </View>
    );
  }
}

export { LocationList };