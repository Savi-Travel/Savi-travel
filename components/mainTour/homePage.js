import React, { Component } from 'react';
import { styles } from '../../styles/styles.js';
import { port } from '../../config';
import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import FBSDK, { LoginManager } from 'react-native-fbsdk'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:'+ port +'/api/cities')
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err));
  }

  facebookLogin() {
     LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      })
  }

  render() {
    let {width, height} = Dimensions.get('window');
    
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View>
        <ScrollView>
        <Text style={styles.logo}>Savi Travel</Text>
        <TouchableOpacity onPress={this.facebookLogin}>
          <Text>
            Login Facebook
          </Text>
        </TouchableOpacity>
            {this.state.data.map((item, i) => {
              return (
                <View key={i}>
                  <TouchableHighlight
                    onPress={() => {this.props.nav(1, item)}}
                  >
                    <Image source={{uri: imgUri + item.mainImage}}
                      style={{width: width, height: height / 3, margin: 0}}
                    >
                    <View style={styles.cityTitlesView}>
                      <Text style={styles.cityTitlesText}>{item.name}</Text>
                    </View>
                    </Image>

                  </TouchableHighlight>
                </View>
              )
            })}
        </ScrollView>
      </View>
    );
  }
}

export { HomePage };
