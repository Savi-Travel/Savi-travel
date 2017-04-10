import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';
// import { LocationList } from './locationList';

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  }
});

const dummyData = [
  // location, pics, guides, drivers
  {
    location: 'Cambodia',
    imgUrl: 'http://www.acrossindochina.com/images/images_tour/0d1298b95dfecf3b7042eddec9ffde9a_Siem-Reap-Cambodia.jpg'
  }
];

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.logo}>Savi Travel</Text>
      </View>
    );
  }
}

export { HomePage };