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


class ReviewOrder extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   fetch('https://savi-travel.com:8082/api/tours')
  //     .then(resp => resp.json())
  //     .then(data => this.setState({data}))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <View>
      <Text>Bugger</Text>
      </View>
    );
  }
}

export { ReviewOrder };