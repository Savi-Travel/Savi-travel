import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  AsyncStorage,
  AlertIOS
} from 'react-native';
import credentials from '../../auth0-credentials';

let STORAGE_KEY = 'id_token';

class InitialOpen extends Component {
  constructor(props) {
    super(props);
    this.profile = '';
  }

  componentWillMount() {
    this.getToken();
  }
  // function to get token from storage
  async getToken() {
    await AsyncStorage.getItem(STORAGE_KEY)
      // if token is null, then route to login
      // if not null, then post to Auth0 for token info
      .then(resp => {
        fetch(`https://${credentials.domain}/tokeninfo`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer${credentials.clientId}`
          },
          body: JSON.stringify({
            id_token: resp
          })
        })
          .then(resp => {
            // console.log('expected fail: ', resp.status);
            if (resp.status === 401 || resp.status === 400) {
              // expired token - redirect to login page
              return this.props.nav(4);
            }
            return resp.json();
          })
          .then(data => {
            if (data === null) {
              // route to login page
              this.props.nav(4);
            } else {
              // check if user exists
              this.profile = data;
              // console.log('PROFILE: ', this.profile);
                fetch('https://savi-travel.com:8080/api/users', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  // dynamic user id
                  body: JSON.stringify({ userId: data.identities[0].user_id })
                  // testing for existing users
                  // body: JSON.stringify({ userId: '0K5qrpZ5e9cYkMU5' })
                })
                  .then(resp => resp.json())
                  .then(data => {
                    if (data.exists === false) {
                      let info = {
                        page: 5,
                        logged: true,
                        profile: this.profile,
                        token: true
                      };
                      // console.log('False page data: ', data);
                      this.props.log(info);
                    } else {
                      this.props.nav(6, data.user);
                      console.log('True page data: ', data, 'testing: ', this.profile);
                    }
                  })
                  .catch(err => console.error(err));
            }
          })
      })
      .catch(err => console.error(err));
  }

  // For testing
  // async setToken() {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, testToken);
  //   } catch (error) {
  //     console.log('AsyncStorage error: ' + error.message);
  //   }
  // }

  render() {
    // **replace text with animated spinner**
    return (
      <Text>Initial Open Page</Text>
    )
  }
}

export { InitialOpen };
