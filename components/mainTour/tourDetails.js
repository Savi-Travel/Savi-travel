'use strict';
import React, { Component } from 'react';
import { styles } from '../../styles/styles.js';
import { port } from '../../config';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Dimensions,
  Image,
  DatePickerIOS,
  DatePickerAndroid,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  Platform
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

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };

  getTour(){
    fetch('https://savi-travel.com:'+ port +'/api/tour_request', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: this.state.date,
        passengers: this.state.passengers,
        tour: this.props.name
      })
    })
  };

  /*
    AVAILABLE PROPS:
      this.props.data.city = id, name, mainImage //(granted from the item selected on the homePage.js component)
      this.props.data.tour = id, title, description, mainImage,
                    createdAt, updatedAt, cityId //(granted from the item selected in the toursList.js component)
  */

  render() {
    let port = 8080;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    const {width, height} = Dimensions.get('window');
    return (
      <View>
        <ScrollView>
          <TourInfo
            data={this.props.data.tour}
            dimensions={{width, height}}
          />

          <Button onPress={() => {this.props.nav(1, this.props.data.city)}} title="Back" />

          <View style={styles.passengersCounter}>
            <View style={{width: width * .7, alignItems: 'center'}}>
              <Text style={{fontSize: 15}}>
                Select Number of Passengers
              </Text>
            </View>
            <View style={{width: width * .3}}>
              <DisplayPicker
                selectedValue={this.state.passengers}
                onValueChange={(quantity) => this.setState({passengers: quantity})}
              />
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{margin: 15, fontSize: 15}}>Select Tour Date</Text>
            <DatePicker
              style={{width: 200}}
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


          <Button onPress={() => {this.props.nav(3, {
            city: this.props.data.city,
            tour: this.props.data.tour,
            info: this.state
          })}}
            title="Book This Tour"
          />
        </ScrollView>
      </View>
    );
  }
}


//Note: the TourInfo component's props are inherited from the tourDetails component. See note above for available props
class TourInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgUri = 'https://savi-travel.com:' + port + '}/api/images/';
    return (
      <View style={{height: this.props.dimensions.height}}>
        <Image
          style={{width: this.props.dimensions.width, height: this.props.dimensions.height / 2}}
          source={{uri: imgUri+this.props.data.mainImage}}/>
        <Text style={styles.locationPage}>{this.props.data.title}</Text>
        <Text style={styles.bodyText}>{this.props.data.description}</Text>
      <View style={{
        height: this.props.dimensions.height,         
      }}>
        <Image 
          style={{width: this.props.dimensions.width, height: this.props.dimensions.height / 2}} 
          source={{uri: imgUri+this.props.data.mainImage}}
        />

        <Text style={styles.locationPage}>{this.props.data.title}</Text>
        <Text style={styles.bodyText}>{this.props.data.description}</Text>        
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
        style={styles.displayPicker}
        selectedValue={this.props.selectedValue}
        onValueChange={this.props.onValueChange}>
        <Picker.Item label="1" value="1" />
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
