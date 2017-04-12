import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  h2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  }
});

class ReviewOrder extends Component {
  constructor(props) {
    super(props); //this.props.data contains: {name, passengers, date}
  }

  render() {
    return (
      <View>
        <Text style={styles.h1}>{ this.props.data.name }</Text>
        <Text style={styles.h2}>{ this.props.data.tour }</Text>
        <Button onPress={() => {this.props.nav(2)}} title="Back" />
      </View>
    );
  }
}

export { ReviewOrder };