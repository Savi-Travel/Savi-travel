import React, { Component } from 'react';
import Styles from '../../styles/styles.js';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import MaterialIcons from '../../node_modules/react-native-vector-icons/MaterialIcons';
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

class ToursList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:8084/api/tours')
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
    let port = 8084;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View style={{height: height, flex: 1, justifyContent: 'space-between'}}>
        <View style={{width: width / 1.03}}>
          <Text style={Styles.components.location}>{this.props.data.name} Tours</Text>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row'}}>
            {tours.map((item, i) => {
              return (
                <View key={i} style={{
                  flex: 1,
                  flexDirection: 'column',
                  width: width
                }}>
                  <View style={{
                    marginLeft: 30,
                    marginRight: 30
                  }}>




                    <TouchableHighlight
                      onPress={() => { this.props.nav(2, {city: this.props.data, tour: item}); }}
                    >
                      <View style={{
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: Styles.colors.mainBlue,
                        padding: 5
                      }}>
                        <Image source={{uri: imgUri + item.mainImage}}
                          style={{
                            height: height / 2,
                            borderRadius: 5,
                          }}
                        />
                      </View>
                    </TouchableHighlight>
                    <View style={{
                      marginTop: 20,
                      paddingTop: 5,
                      paddingBottom: 5,
                      backgroundColor: Styles.colors.mainBlue,
                      borderRadius: 5
                    }}>
                      <Text style={[
                        Styles.components.tourDesc
                      ]}>{item.description}</Text>
                    </View>
                  </View>
                </View>
              )
            })}
            </View>
        </ScrollView>
        </View>
        <View style={{
          paddingRight: 30,
          paddingLeft: 30
        }}>
          <TouchableHighlight
              onPress={() => {this.props.nav(0)}}
              style={Styles.components.buttonTransparent}
            >
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0
              }}>
                <Text style={{
                  color: Styles.colors.mainBlue,
                  fontSize: 20
                }}>Go Back</Text>
              </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export { ToursList };