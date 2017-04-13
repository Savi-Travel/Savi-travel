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
    super(props);
  }

  /*
    AVAILABLE PROPS:
      this.props.data.city = id, name, mainImage //(granted from the item selected on the homePage.js component)
      this.props.data.tour = id, title, description, mainImage, 
                    createdAt, updatedAt, cityId //(granted from the item selected in the toursList.js component)
      this.props.data.info = date, timeZoneOffsetInHours, 
                    passengers //(granted from the selections made in the tourDetails.js component)
  */

  render() {
    return (
      <View>
        <Text style={styles.h1}>{ this.props.data.city.name }</Text>
        <Text style={styles.h2}>{ this.props.data.tour.title }</Text>
        <Text style={styles.body}>You've booked
        {(this.props.data.info.passengers>1) ? " "+this.props.data.info.passengers+" seats " :  " "+this.props.data.info.passengers+" seat "}
        for {this.props.data.info.date.toString()}
        </Text>
        <Button onPress={() => {this.props.nav(2, {city: this.props.data.city, tour: this.props.data.tour})}} title="Back" />
      </View>
    );
  }
}

export { ReviewOrder };