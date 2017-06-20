import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Styles } from '../../styles/styles.js';

let {width, height} = Dimensions.get('window');
let port = 8080;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch(`https://savi-travel.com:${port}/api/cities`)
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err));
  }

  render() {
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View>
        <ScrollView>
          <Text style={Styles.home('logo')}>Savi Travel </Text>
            {this.state.data.map(item => {
              return (
                <View key={item.id}>
                  <TouchableHighlight
                    onPress={() => { this.props.nav(1, item); }}
                  >
                    <Image
                      source={{uri: imgUri + item.mainImage}}
                      style={{width: width, height: height / 3, margin: 0}}
                    >
                    <View style={Styles.home('cityTitlesView')}>
                      <Text style={Styles.home('cityTitlesText')}>{item.name}</Text>
                    </View>
                    </Image>
                  </TouchableHighlight>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

export { HomePage };
