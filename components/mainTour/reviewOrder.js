import React, { Component } from 'react';
import { port } from '../../config';
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
  },
  body2: {
    fontSize: 15,
    textAlign: 'center',
  },
  userName: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold'
  }
});

class ReviewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        tour: {},
        driver: {
          userName: '',
          userEmail: '',
          mdn: 0,
          photo: '',
        },
        guide: {
          userName: '',
          userEmail: '',
          mdn: 0,
          photo: ''
        }
      }
    }
  }

  componentWillMount() {
    fetch('https://savi-travel.com:'+ config.port +'/api/bookings?tourId='+this.props.data.tour.id+'&date=1')
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err));
  }

  /*
    AVAILABLE PROPS:
      this.props.data.city = id, name, mainImage //(granted from the item selected on the homePage.js component)
      this.props.data.tour = id, title, description, mainImage,
                    createdAt, updatedAt, cityId //(granted from the item selected in the toursList.js component)
      this.props.data.info = date, timeZoneOffsetInHours,
                    passengers //(granted from the selections made in the tourDetails.js component)
    AVAILABLE STATE:
      this.state.data.driver = id, userName, userEmail, mdn, country, photo, type, createdAt, updatedAt, cityId
      this.state.data.guide = id, userName, userEmail, mdn, country, photo, type, createdAt, updatedAt, cityId
  */

  render() {
    let {width, height} = Dimensions.get('window');
    let port = 8080;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.h1}>{ this.props.data.city.name }</Text>
        <Text style={styles.h2}>{ this.props.data.tour.title }</Text>

        <Text style={styles.body}>
        You've booked
        {(this.props.data.info.passengers>1) ? " "+this.props.data.info.passengers+" seats " :  " "+this.props.data.info.passengers+" seat "}
        for {this.props.data.info.date.toString()}
        </Text>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.body}>Your driver is</Text>
            <Image style={{width: (width/2)-1, height: (width/2)-1, margin: 1}} source={{uri: imgUri+this.state.data.driver.photo}}>
            </Image>
            <Text style={styles.userName}>{this.state.data.driver.userName}</Text>
            <Text style={styles.body2}>{this.state.data.driver.userEmail}</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.body}>Your guide is</Text>
            <Image style={{width: (width/2)-1, height: (width/2)-1, margin: 1}} source={{uri: imgUri+this.state.data.guide.photo}}>
            </Image>
            <Text style={styles.userName}>{this.state.data.guide.userName}</Text>
            <Text style={styles.body2}>{this.state.data.guide.userEmail}</Text>
          </View>
        </View>


        <Button onPress={() => {this.props.nav(2, {city: this.props.data.city, tour: this.props.data.tour})}} title="Back" />
      </View>
    );
  }
}

export { ReviewOrder };