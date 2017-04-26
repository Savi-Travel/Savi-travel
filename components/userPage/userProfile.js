import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';

let {width, height} = Dimensions.get('window');
let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'flex-start'
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

let port = 8080;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: ''
    };
  }

  // componentDidMount() {
  //   console.log('user data: ', this.props.data);
  // }

  _bookingsByType(userType) {
    // employee
    // if (userType === 'Tour Guide' || userType === 'Driver') {
      // return bookings for employee
      // fetch(`https://savi-travel.com:${port}/api/bookings?userId=this.props.data.userAuthId`)
      //   .then(resp => resp.json())
      //   .then(data => console.log('booking data: ', data))
      //   .catch(err => console.error(err));
    // }
    // return bookings for tourist
  }



  render() {
    // this page is to render profile image
    // add buttons to continue as tourist/worker (for workers)
    // check userType - worker/tourist
      /*<Image
        style={styles.profilePic}
        source={{uri: imgUri + this.props.data.photo}}
      />*/
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <UserAvatar name={this.props.data.userName} src={imgUri + this.props.data.photo} size={100} />
        </View>
        <Text
          style={styles.textContent}
        >
        Hello {this.props.data.userName.split(/ /)[0]},
        </Text>
        <Text style={styles.textContent}>You have no booked tours.</Text>

        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center'}}>
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
