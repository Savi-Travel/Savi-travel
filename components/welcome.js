import React, { Component } from 'react';
import Styles from '../styles/styles.js';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import Auth0Lock from 'react-native-lock';

import credentials from '../auth0-credentials';

let lock = new Auth0Lock(credentials);

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
        // body: JSON.stringify({ userId: 'ABCDEFGHIJKLMNOP1' })
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
            // this.props.log(info);
          } else {
            let info = {
              page: 6,
              logged: true,
              profile,
              token
            };
            this.props.log(info);
          }
        })
        .catch(err => console.error(err));
        // if user does not exist, send to page 5 (registration)
        // no token needed for now (delete if decision is final)
        // if user exist, send to page 6 (user profile)
    });
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
