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
      primary: '',
      otherLanguage: '',
      complete: true
    });
  }

  createUser(userInput) {
    let userInfo = {
      // userId: this.props.data.identities[0].userId,
      profileData: {
        name: this.props.data.name,
        email: this.props.data.email,
        phone: this.state.mdn,
        city: this.state.city,
        country: this.state.country,
        photo: this.props.data.picture,
        // add languages from input
        // need to determine what input is coming in
        languages: []
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
        <Text style={styles.register}>Registration</Text>
        <View>
          <TextInput
            style={styles.inputBox}
            placeholder='Phone Number, e.g. 14155555555'
            maxLength={11}
            keyboardType={'numeric'}
            value={this.state.mdn}
            onChangeText={mdn => this.setState({mdn})}
          />
           <TextInput
            style={styles.inputBox}
            placeholder='City'
            maxLength={50}
            value={this.state.city}
            onChangeText={city => this.setState({city})}
          />
           <TextInput
            style={styles.inputBox}
            placeholder='Country'
            maxLength={50}
            value={this.state.country}
            onChangeText={country => this.setState({country})}
          />
          <TextInput
            style={styles.inputBox}
            placeholder='Primary Language'
            maxLength={25}
            value={this.state.languages}
            onChangeText={languages => this.setState({languages})}
          />
           <TextInput
            style={styles.inputBox}
            placeholder='Language(s), e.g. English, Spanish, ...'
            maxLength={25}
            value={this.state.languages}
            onChangeText={languages => this.setState({languages})}
          />
        </View>
        <Text>Phone number format here: {this.state.mdn}</Text>
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

