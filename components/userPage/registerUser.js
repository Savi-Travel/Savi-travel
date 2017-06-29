import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import CitySelector from './citySelector';

let styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  register: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputBox: {
    height: 40,
    width: 300,
    paddingLeft: 3,
    borderColor: '#b9b9b9',
    borderRadius: 1,
    borderWidth: 1,
    margin: 0,
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
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  missingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
});

// helper functions

var formatSpelling = function(input) {
  let regex = new RegExp('USA', 'i');
  if (input.search(regex) >= 0) {
    return 'USA';
  }
  let firstChar = input.charAt().toUpperCase();
  let formattedInput = input.toLowerCase().replace(/\w/, firstChar);
  return formattedInput;
};

var formatLanguages = function(primary, others) {
  // primary
  let firstChar = primary.charAt().toUpperCase();
  let formattedPrimary = primary.toLowerCase().replace(/\w/, firstChar);
  let allLanguages = [formattedPrimary];
  // others
  let languageCollection = others.split(', ');
  for (let i = 0; i < languageCollection.length; i++) {
    let firstChar = languageCollection[i].charAt().toUpperCase();
    let formattedLanguage = languageCollection[i].toLowerCase().replace(/\w/, firstChar);
    allLanguages = [...allLanguages, formattedLanguage];
  }
  return allLanguages;
};

var formatCity = function(city) {
  let cityFormatted = [];
  let cityBreakdown = city.split(' ');
  for (let i = 0; i < cityBreakdown.length; i++) {
    let firstChar = cityBreakdown[i].charAt().toUpperCase();
    let formattedWord = cityBreakdown[i].toLowerCase().replace(/\w/, firstChar);
    cityFormatted = [...cityFormatted, formattedWord];
  }
  if (cityFormatted.join(' ') === 'Rio De Janeiro') {
    return 'Rio de Janeiro';
  } else {
    return cityFormatted.join(' ');
  }
};

// Component: registration

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

    this.handleCity = this.handleCity.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser(userInput) {
    this.setState({complete: true});
    // format country for USA
    let country = formatSpelling(this.state.country);
    // format city
    let city = formatCity(this.state.city);
    // format language
    let languages = formatLanguages(this.state.primary, this.state.otherLanguage);
    // info to post
    // console.log('registration: ', this.props.data.identities[0].user_id);
    let userInfo = {
      userId: this.props.data.identities[0].user_id,
      profileData: {
        name: this.props.data.name,
        email: this.props.data.email,
        phone: this.state.mdn,
        city,
        country,
        photo: this.props.data.picture,
        languages
      }
    };
    // set conditional for required info
    if (userInfo.profileData.phone === '' || userInfo.profileData.city === '' || userInfo.profileData.country === '' || userInfo.profileData.languages === '') {
      this.setState({complete: false});
    } else {
      fetch('https://savi-travel.com:8080/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
        .then(resp => resp.json())
        .then(data => {
          // console.log('passing registration: ', data);
          this.props.nav(6, data.user);
        })
        .catch(err => console.error(err));
    }
  }

  handleCity(city) {
    this.setState({ city });
  }

  missingInfo() {
    if (!this.state.complete) {
      return (
        <Text style={styles.missingText}>Please fill out all sections</Text>
      );
    } else {
      return null;
    }
  }
  render() {
    const {width, height} = Dimensions.get('window');
    return (
      <View style={styles.registerContainer}>
        <View style={{marginTop: 30}}>
          <Text style={styles.register}>Registration</Text>
        </View>
        <View>
          <View>
            <TextInput
              style={styles.inputBox}
              placeholder='Phone, e.g. 415-555-5555'
              maxLength={12}
              keyboardType={'numeric'}
              value={this.state.mdn}
              onChangeText={mdn => {
                let mdnInput = mdn.length;
                let mdnState = this.state.mdn.length;

                if (mdnInput <= 3) {
                  this.setState({mdn});
                } else if (mdnInput === 4 && mdnInput > mdnState) {
                  let currInput = mdn.slice(3);
                  let newDisplay = this.state.mdn + '-' + currInput;
                  this.setState({mdn: newDisplay});
                } else if (mdnInput === 4 && mdnInput < mdnState) {
                  let deleteNum = mdn.slice(0, 3);
                  this.setState({mdn: deleteNum});
                } else if (mdnInput <= 7) {
                  this.setState({mdn});
                } else if (mdnInput === 8 && mdnInput > mdnState) {
                  let currInput = mdn.slice(7);
                  let newDisplay = this.state.mdn + '-' + currInput;
                  this.setState({mdn: newDisplay});
                } else if (mdnInput === 8 && mdnInput < mdnState) {
                  let deleteNum = mdn.slice(0, 7);
                  this.setState({mdn: deleteNum});
                } else {
                  this.setState({mdn});
                }
              }}
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
              placeholder='City'
              maxLength={25}
              value={this.state.city}
              onChangeText={city => this.setState({city})}
            />
            <TextInput
              style={styles.inputBox}
              placeholder='Primary Language'
              maxLength={25}
              value={this.state.primary}
              onChangeText={primary => this.setState({primary})}
            />
             <TextInput
              style={styles.inputBox}
              placeholder='Language(s), e.g. English, Spanish, ...'
              maxLength={150}
              value={this.state.otherLanguage}
              onChangeText={otherLanguage => this.setState({otherLanguage})}
            />

          </View>
        </View>
        <View style={{marginTop: 20}}>
          {this.missingInfo()}
        </View>
        <View style={{marginBottom: 10}}>
          <TouchableHighlight
            style={styles.submitButton}
            underlayColor='#949494'
            onPress={this.createUser}>
            <Text>Create account</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export { RegisterUser };


            // <View style={{height: 40}}>
            //   <CitySelector regCity={this.handleCity}/>
            // </View>
