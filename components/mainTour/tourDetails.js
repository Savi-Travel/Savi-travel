'use strict';
import React, { Component } from 'react';
import { styles } from '../../styles/styles.js';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Dimensions,
  Image,
  DatePickerIOS,
  TextInput,
  ScrollView,
  Picker
} from 'react-native';

class TourDetails extends Component {
  constructor(props) {
    super(props);

    var acceptBtn = () => {
      this.props.nav(1)
    };
  }

  static defaultProps = {
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    img: 'https://pbs.twimg.com/media/C4QNypEWEAQT32x.jpg',
    name: 'Paris, France',
    desc: 'Get served food by incredibly rude waiters!'
  };

  state = {
    date: this.props.date,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    passengers: 1
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  };

  getTour(){
    fetch('https://savi-travel.com:8084/api/tour_request', {
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

  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ScrollView>
          <Image style={{width: width, height: height/2}} source={{uri: this.props.img}}/>
          <Text style={styles.locationPage}>{this.props.name}</Text>
          <Text style={styles.bodyText}>{this.props.desc}</Text>
          <Button onPress={() => {this.props.nav(1)}} title="Back" />

          <Heading label="How many passengers?" />
          <DisplayPicker
            selectedValue={this.state.passengers}
            onValueChange={(quantity) => this.setState({passengers: quantity})} />

          <Heading label="Select the date" />
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}/>


          <Button title="Get Tour" onPress={() => {this.getTour()}} />
        </ScrollView>
      </View>
    );
  }
}

class DisplayPicker extends React.Component {
  render() {
    return (
      <Picker
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

class Heading extends React.Component {
  render() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

export { TourDetails };