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
        // if user does not exist, send to page 5
        // if user exist, send to page 6
      let info = {
        page: 6,
        logged: true,
        profile,
        token
      };
      this.props.log(info);
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
