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
import Autocomplete from 'react-native-autocomplete-input';

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
    // let userInfo = {
    //   // userId: this.props.data.identities[0].userId,
    //   profileData: {
    //     name: this.props.data.name,
    //     email: this.props.data.email,
    //     phone: this.state.mdn,
    //     city: this.state.city,
    //     country: this.state.country,
    //     photo: this.props.data.picture,
    //     // add languages from input
    //     // need to determine what input is coming in
    //     languages: []
    //   }
    // };
    // set conditional for required info
    // POST request to backend
    // clear state
    // this.setState({
    //   mdn: '',
    //   country: '',
    //   city: '',
    //   languages: []
    // });
    console.log('create user: ', this.state.mdn, this.state.city);
    // format country for USA
    let country = formatSpelling(this.state.country);
    // format city
    let city = formatSpelling(this.state.city);
    // format language
    let languages = formatLanguages(this.state.primary, this.state.otherLanguage);
    console.log('format language: ', languages);
      // use helper function passing in primary and others
  }

  handleCity(city) {
    console.log('register city: ', city);
    // format city
    this.setState({ city });
  }

  render() {
    // console.log('Auth stuff: ', this.props.data);
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
            <View style={{height: 40}}>
              <CitySelector regCity={this.handleCity.bind(this)}/>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text>Phone number format here: {this.state.mdn}</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <TouchableHighlight
            style={styles.submitButton}
            underlayColor='#949494'
            onPress={this.createUser.bind(this)}>
            <Text>Create account</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

// Component: Available cities
class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      city: '',
      query: ''
    };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:8080/api/cities')
      .then(resp => resp.json())
      .then(data => this.setState({locations: data}))
      .catch(err => console.error(err));
  }

  findCity (query) {
    if (query === '') {
      return [];
    }

    const { locations } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return locations.filter(location => location.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const cities = this.findCity(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize='none'
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={cities.length === 1 && comp(query, cities[0].name) ? [] : cities}
          defaultValue={query}
          onChangeText={text => {
            this.props.regCity(text);
            this.setState({ query: text });
          }}
          placeholder='City'
          renderItem={({ name }) => (
            <TouchableOpacity onPress={() => {
              this.props.regCity(name);
              this.setState({ query: name });
            }}>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export { RegisterUser };

// helper functions
// after registration redirect to page 6

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