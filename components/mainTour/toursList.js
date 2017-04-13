import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  location: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },
  tourDesc: {
    margin: 5,
    color: '#85CCB9'
  },
  tourTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

class ToursList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:8082/api/tours')
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err));
  }

  render() {
    let {width, height} = Dimensions.get('window');
    let tours = this.state.data.filter(item => {
      return item.cityId === this.props.data.id;
    });
    let port = 8080;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{width: width / 1.03}}>
          <Text style={styles.location}>{this.props.data.name} Tours</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
            {tours.map((item, i) => {
              return (
                <View key={i} style={{flex: 1, flexDirection: 'column', width: width}}>
                  <Text style={styles.tourTitle}>{item.title}</Text>
                  <TouchableHighlight
                    onPress={() => { this.props.nav(2, {city: this.props.data, tour: item}); }}
                  >
                    <Image source={{uri: imgUri + item.mainImage}}
                      style={{width: width / 1.03, height: height / 2, margin: 5}}
                    />
                  </TouchableHighlight>
                  <Text style={styles.tourDesc}>{item.description}</Text>
                </View>
              )
            })}
            </View>
        </ScrollView>
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <Button
            onPress={() => {this.props.nav(0)}}
            title="Back"
           />
        </View>
      </View>
    );
  }
}

export { ToursList };