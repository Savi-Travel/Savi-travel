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

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    // this page is to render profile image
    // add buttons to continue as tourist/worker (for workers)
    // check userType - worker/tourist
    return (
      <View style={styles.container}>
        <Text>User Page</Text>
        <Text>{JSON.stringify(this.props.data)}</Text>
      </View>
    );
  }
}

export { UserProfile };

// helper functions
// change Hello based on language