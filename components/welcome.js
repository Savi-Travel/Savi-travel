import React, { Component } from 'react';
import Styles from '../styles/styles.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';

import Auth0Lock from 'react-native-lock';

import credentials from '../auth0-credentials';

let lock = new Auth0Lock(credentials);

let STORAGE_KEY = 'id_token';

class WelcomeView extends Component {
  constructor(props) {
    super(props);
  }

  _onLogin() {
    lock.show({
      closable: true,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setToken(token.idToken);
      // check if user exists
      fetch('https://savi-travel.com:8080/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // dynamic user id
        body: JSON.stringify({ userId: profile.identities[0].userId })
        // testing for existing users
        // body: JSON.stringify({ userId: '0K5qrpZ5e9cYkMU5' })
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.exists === false) {
            let info = {
              page: 5,
              logged: true,
              profile,
              token
            };
            console.log('profile: ', profile, 'token: ', token);
            this.props.log(info);
          } else {
            this.props.nav(6, data.user);
          }
        })
        .catch(err => console.error(err));
        // if user does not exist, send to page 5 (registration)
        // if user exist, send to page 6 (user profile)
    });
  }

  async setToken(token) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, token);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View style={Styles.components.container}>
        <View style={Styles.components.messageBox}>
          <Image
            style={Styles.components.badge}
            source={require('./mainTour/saviTeam.png')}
          />
          <Text style={Styles.components.title}>Welcome to Savi Travel</Text>
        </View>
        <TouchableHighlight
          style={Styles.components.signInButton}
          underlayColor='#949494'
          onPress={this._onLogin.bind(this)}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export { WelcomeView };
