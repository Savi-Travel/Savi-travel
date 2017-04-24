import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

let {width, height} = Dimensions.get('window');
let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    height,
    width
  },
  profilePic: {
    width: width / 2,
    height: height / 5,
    marginTop: 30,
    marginLeft: 10
  },
  browseButon: {
    height: 50,
    width: 300,
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContent: {
    fontSize: 20,
    marginLeft: 10
  }
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: ''
    };
  }

  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    // this page is to render profile image
    // add buttons to continue as tourist/worker (for workers)
    // check userType - worker/tourist
    let image = {
      uri: this.props.data.picture
    };
    return (
      <View style={styles.container}>
        <Image style={styles.profilePic} source={image} />
        <Text style={styles.textContent}>Hello {this.props.data.name},</Text>
        <Text style={styles.textContent}>You have no booked tours.</Text>
        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <TouchableHighlight
            style={styles.browseButon}
            underlayColor='#949494'
            onPress={() => {
              this.props.nav(0);
            }}
          >
            <Text>Browse Tours</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export { UserProfile };

// helper functions
// change Hello based on language