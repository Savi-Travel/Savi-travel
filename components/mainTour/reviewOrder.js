import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  h2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  }
});

class ReviewOrder extends Component {
  constructor(props) {
    super(props); //this.props.data contains: {name, tour, passengers, date}
    this.state = {
      name: this.props.data.name,
      tour: this.props.data.tour,
      seats: this.props.data.passengers,
      date: this.props.data.date.toString()
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.h1}>{ this.state.name }</Text>
        <Text style={styles.h2}>{ this.state.tour }</Text>
        <Text style={styles.body}>You've booked
        {(this.state.seats>1) ? " "+this.state.seats+" seats " :  " "+this.state.seats+" seat "}
        for {this.state.date}
        </Text>
        <Button onPress={() => {this.props.nav(2, {
          id: item.id, 
          name: this.props.data.name, 
          tour: item.title, 
          img: imgUri + item.mainImage
        })}} title="Back" />
      </View>
    );
  }
}

export { ReviewOrder };