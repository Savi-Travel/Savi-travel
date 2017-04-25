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

let testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Zub3AuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAzMjMzOTk1NzY4MDM0MDQ5NDA4IiwiYXVkIjoibWhjSGVmNXZRMUpmSVRrdDF0U1dCc1FhazhSS3lJbnUiLCJleHAiOjE0OTMxODQyNjksImlhdCI6MTQ5MzE0ODI2OX0.9nHqqN-mrKv7-50bxG6aBcAoVs_QzXbN0Cl2r4hCyT8';

class InitialOpen extends Component {
  constructor(props) {
    super(props);
  }

  // component will mount to get token from storage
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
          .then(resp => resp.json())
          .then(data => {
            if (data === null) {
              // route to welcome page
              this.props.nav(4);
            } else {
              // route to user profile page
                let info = {
              page: 6,
              logged: true,
              profile,
              token
            };
            this.props.log(info);
            }
            console.log('auth0 resp: ', data);
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
    return (
      <Text>Initial Open Page</Text>
    )
  }
}

export { InitialOpen };