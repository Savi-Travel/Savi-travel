'use strict';
import React, { Component } from 'react';
import Styles from '../../styles/styles.js';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import MaterialIcons from '../../node_modules/react-native-vector-icons/MaterialIcons';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker';

class TourDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      endDate: new Date(Date.now() + (30 * 24 * 60 * 60 * 1000)),
      passengers: 1
    }
    var acceptBtn = () => {
      this.props.nav(1)
    };
  }

  // this format of a method handles the binding issue
  onDateChange = (date) => {
    this.setState({date});
  };

  /*
    AVAILABLE PROPS:
      this.props.data.city = id, name, mainImage //(granted from the item selected on the homePage.js component)
      this.props.data.tour = id, title, description, mainImage,
                    createdAt, updatedAt, cityId //(granted from the item selected in the toursList.js component)
  */

  render() {
    let port = 8084;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    const {width, height} = Dimensions.get('window');
    var _scrollView: ScrollView;
    return (
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }} >
          <View style={{height: height}}>
            <TourInfo
              data={this.props.data.tour}
              dimensions={{width, height}}
            />
            <TouchableHighlight
              onPress={() => {_scrollView.scrollTo({y: height})}}
              underlayColor={Styles.colors.almostWhite}
              style={{
                marginTop: 30,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MaterialIcons name="arrow-drop-down-circle" size={45} color={Styles.colors.lightGreen} />
            </TouchableHighlight>
          </View>

          <View style={{height: height}}>
            <View style={{
              marginBottom: 30,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontSize: 30,
                color: Styles.colors.lightGreen
              }}> Last Details
              </Text>
            </View>
            <View style={Styles.components.passengersCounter}>
              <View style={Styles.components.counterInnerWrapper}>
                <View style={{
                  width: width * .7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 50
                }}>
                  <Text style={{
                    fontSize: 20,
                    color: Styles.colors.lightGreen
                  }}>
                    Select Number of Passengers
                  </Text>
                </View>
                <View style={{
                  marginBottom: 30
                }}>
                  <DisplayPicker
                    selectedValue={this.state.passengers}
                    onValueChange={(quantity) => this.setState({passengers: quantity})}
                  />
                </View>
              </View>
            </View>

            <View style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: 30,
              marginRight: 30
            }}>
              <View>
                <Text style={{
                  fontSize: 20,
                  fontFamily: Styles.fonts.mainFont,
                  color: Styles.colors.lightGreen,
                  marginTop: 20
                }}>Select Tour Date
                </Text>
              </View>

              <View>
                <DatePicker
                  style={{
                    width: 300,
                    padding: 20,
                    marginTop: 40,
                    marginRight: 30,
                    marginLeft: 30
                  }}
                  date={this.state.date}
                  mode="date"
                  placeholder="placeholder"
                  format="MM-DD-YYYY"
                  minDate={this.state.date}
                  maxDate={this.state.endDate}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={this.onDateChange}
                />
              </View>
            </View>

            <TouchableHighlight
              onPress={() => {this.props.nav(3, {
                city: this.props.data.city,
                tour: this.props.data.tour,
                info: this.state
              })}}
              style={Styles.components.bookTourButton}
            >
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  color: Styles.colors.almostWhite,
                  fontSize: 20
                }}>Book this Tour</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {this.props.nav(1, this.props.data.city)}}
              style={Styles.components.goBackButton}
            >
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  color: Styles.colors.mainBlue,
                  fontSize: 20
                }}>Go Back</Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
    );
  }
}


//Note: the TourInfo component's props are inherited from the tourDetails component. See note above for available props
class TourInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let port = 8084;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View>
        <Image
          style={{width: this.props.dimensions.width, height: this.props.dimensions.height / 2}}
          source={{uri: imgUri+this.props.data.mainImage}}/>
        <Text style={[
          Styles.components.locationPage,
          Styles.components.textColor
        ]}>{this.props.data.title}</Text>
        <Text style={[
          Styles.components.bodyText,
          Styles.components.textColor
        ]}>{this.props.data.description}</Text>
      </View>
    );
  }
}

class DisplayPicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Picker
        style={{

        }}
        itemStyle={{color:'blue'}}
        selectedValue={this.props.selectedValue}
        onValueChange={this.props.onValueChange}>
        <Picker.Item color="green" label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
      </Picker>
    );
  }
}

export { TourDetails };
