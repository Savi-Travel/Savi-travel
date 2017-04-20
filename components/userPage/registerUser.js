import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  register: {
    fontSize: 15
  },
  inputBox: {
    height: 30,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    height: 50,
    width: 300,
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      mdn: '',
      country: '',
      city: '',
      languages: []
    });
  }

  createUser(userInput) {
    console.log('phone number: ', this.mdnInput.value);
    let userInfo = {
      userId: this.props.data.identities[0].userId,
      profileData: {
        name: this.props.data.name,
        email: this.props.data.email,
        phone: this.state.mdn,
        city: this.state.city,
        country: this.state.country,
        photo: this.props.data.picture,
        languages: [...this.state.languages, language]
      }
    };
    // set conditional for required info
    // POST request to backend
    // clear state
    this.setState({
      mdn: '',
      country: '',
      city: '',
      languages: []
    });
  }

  render() {
    console.log('Auth stuff: ', this.props.data);
    return (
      <View style={styles.container}>
        <Text>Registration</Text>
        <TextInput
          style={styles.inputBox}
          placeholder='Phone Number, e.g. 14155555555'
          maxLength={11}
          keyboardType='numeric'
          />
        <Text>Phone number format here</Text>
        <TouchableHighlight
          style={styles.submitButton}
          underlayColor='#949494'
          onPress={this.createUser.bind(this)}>
          <Text>Create account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export { RegisterUser };

// helper functions
// after registration redirect to page 6
