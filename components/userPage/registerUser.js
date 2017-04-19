import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
});

class RegisterUser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Register User Page</Text>
        <Text>{JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export { RegisterUser };

// helper functions