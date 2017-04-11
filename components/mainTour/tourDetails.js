import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  locationPage: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },
  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  }
});

class TourDetails extends Component {
  constructor(props) {
    super(props);

    acceptBtn = () => {
      this.props.nav(1)
    };
  }

  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Image style={{width: width, height: height/2}} source={{uri: appData.img}}/>      
        <Text style={styles.locationPage}>{appData.name}</Text>
        <Text style={styles.bodyText}>{appData.desc}</Text>
        <Button style={{width: width/2}} onPress={() => {this.props.nav(1)}} title="Back" />
      </View>
    );
  }
}

const appData = { //test data for builds
  img: 'https://pbs.twimg.com/media/C4QNypEWEAQT32x.jpg', 
  name: 'Paris, France', 
  desc: 'Get served food by incredibly rude waiters!'
};

export { TourDetails };