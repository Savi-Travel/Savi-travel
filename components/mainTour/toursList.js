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
import Styles from '../../styles/styles.js';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import MaterialIcons from '../../node_modules/react-native-vector-icons/MaterialIcons';

class ToursList extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:8080/api/tours')
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err));
  }
  /*
    AVAILABLE PROPS:
      this.props.data.city = id, name, mainImage //(granted from the item selected on the homePage.js component)
  */
  render() {
    let {width, height} = Dimensions.get('window');
    let tours = this.state.data.filter(item => {
      return item.cityId === this.props.data.id;
    });
    let port = 8080;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View style={Styles.toursList('mainContainer')}>
        <View>
          <Text style={Styles.toursList('location')}>{this.props.data.name} Tours</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <View style={Styles.toursList('scrollContainer')}>
            {tours.map((item, i) => {
              return (
                <View key={i} style={Styles.toursList('viewFrame')}>
                  <View style={Styles.toursList('viewFrameInner')}>

                    <TouchableHighlight
                      onPress={() => { this.props.nav(2, {city: this.props.data, tour: item}); }}
                    >
                      <View style={Styles.toursList('imageFrame')}>
                        <Image source={{uri: imgUri + item.mainImage}}
                          style={Styles.toursList('tourImage')}
                        />
                      </View>
                    </TouchableHighlight>
                    <View style={Styles.toursList('descriptionContainer')}>
                      <Text style={Styles.toursList('descriptionText')}>{item.description}</Text>
                    </View>
                  </View>
                </View>
              )
            })}
            </View>
          </ScrollView>
        </View>
        <View style={Styles.toursList('buttonWrapper')}>
          <TouchableHighlight
              onPress={() => {this.props.nav(0)}}
              style={Styles.toursList('buttonTransparent')}
            >
              <View style={Styles.toursList('buttonInner')}>
                <Text style={Styles.toursList('buttonText')}>Go Back</Text>
              </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export { ToursList };