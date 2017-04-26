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

let testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Zub3AuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAzMjMzOTk1NzY4MDM0MDQ5NDA4IiwiYXVkIjoibWhjSGVmNXZRMUpmSVRrdDF0U1dCc1FhazhSS3lJbnUiLCJleHAiOjE0OTMxOTU3OTEsImlhdCI6MTQ5MzE1OTc5MX0.5_s7yfmGrf4Pzg8CNJ_qm6EnQTtJweE67PUW_nrLrd4';

class InitialOpen extends Component {
  constructor(props) {
    super(props);
    this.profile = '';
  }

  componentWillMount() {
    // this.setToken();
    this.getToken();
    // console.log('token: ', token);
  }
  // function to get token from storage
  async getToken() {
    await AsyncStorage.getItem(STORAGE_KEY)
      // if token is null, then route to welcome
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
            if (resp.status === 401) {
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
                fetch('https://savi-travel.com:8080/api/users', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  // dynamic user id
                  // body: JSON.stringify({ userId: data.identities[0].userId })
                  // testing for existing users
                  body: JSON.stringify({ userId: '0K5qrpZ5e9cYkMU5' })
                })
                  .then(resp => resp.json())
                  .then(data => {
                    if (data.exists === false) {
                      let info = {
                        page: 5,
                        logged: true,
                        // need profile to send to registration
                        profile: this.profile,
                        token: true
                      };
                      console.log('False page data: ', data);
                      this.props.log(info);
                    } else {
                      this.props.nav(6, data.user);
                      // console.log('True page data: ', data, 'testing: ', this.profile);
                    }
                  })
                  .catch(err => console.error(err));
            }
          })
      })
      .catch(err => console.error(err));
  }

  async setToken() {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, testToken);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    // **replace text with animated spinner**
    return (
      <Text>Initial Open Page</Text>
    )
  }
}

export { InitialOpen };