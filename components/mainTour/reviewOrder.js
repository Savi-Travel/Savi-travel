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
    super(props); //this.props.data contains: {name, passengers, date}
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
        <Text>{ this.props.data.name }</Text>
        <Button onPress={() => {this.props.nav(2)}} title="Back" />
      </View>
    );
  }
}

export { ReviewOrder };