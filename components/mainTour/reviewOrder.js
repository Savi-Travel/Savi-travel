import React, { Component } from 'react';
import Styles from '../../styles/styles.js';
import Load from "../../node_modules/react-native-loading-gif";

import {
  Text,
  Button,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

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
      },
      stripeRequest: '',
      paymentInfo: '',
      paymentReady: false
    };
  }

  componentWillMount() {
    fetch('https://api.stripe.com/v1/tokens?card[number]='+this.props.paymentInfo.cardNumber+'&card[exp_month]='+this.props.paymentInfo.expMonth+'&card[exp_year]='+this.props.paymentInfo.expYear+'&card[cvc]='+this.props.paymentInfo.cvc+'&amount=111&currency=usd', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer sk_test_t33bUz9G1cD2X6UexENeMvpd"
      }
    })
    .then(resp => resp.json())
      .then(data => {
        console.log('success..', data);
        if(data) {
          this.setState({
            stripeRequest: data
          });
        }
        fetch('https://savi-travel.com:8084/payments', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({stripeToken: data.id})
        })
        .then(resp => resp.json())
          .then(function(response) {
            if(response.paid) {
            fetch('https://savi-travel.com:8084/api/bookings?date=05-28-2017&tourId=1')
              .then(resp => resp.json())
              .then(data => this.setState({data}))
              .catch(err => console.error(err));
              this.setState({
                paymentReady: true
              });
            }
          }.bind(this)).catch(err => console.error(err));
      })
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
    let port = 8084;
    let imgUri = `https://savi-travel.com:8084/api/images/`;
    return (

      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        { !this.state.paymentReady ? (
         <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:Styles.colors.mainBlue,
          opacity: .8,
          height: height
        }}>
          <Text style={{
            color: Styles.colors.almostWhite,
            fontSize: 17
          }}>
            Processing Payment ...
          </Text>
         </View>
        ) : (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          paddingLeft: 30,
          paddingRight: 30
        }}>
          <Text
            style={Styles.components.h1}>{ this.props.data.city.name }
          </Text>

          <View style={{
            backgroundColor: Styles.colors.lightGreen,
            padding: 25,
            borderRadius: 2,
            marginTop: 30
          }}>
            <Text
              style={Styles.components.h2}>{ this.props.data.tour.title }
            </Text>

            <Text style={Styles.components.body}>
            You've booked
            {(this.props.data.info.passengers>1) ? " "+this.props.data.info.passengers+" seats " :  " "+this.props.data.info.passengers+" seat "}
            for {this.props.data.info.date.toString()}
            </Text>
          </View>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            height: 120,
            marginTop: 20
          }}>
            <View style={{
              height: 220,
              width: 150,
              margin: 'auto'
            }}>
              <Text style={{
                  fontSize: 18,
                  textAlign: 'center',
                  margin: 10,
                  color: Styles.colors.mainBlue
                }}>
                Your driver is
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 1,
                    borderRadius: 50
                  }}
                  source={{
                    uri: imgUri+this.state.data.driver.photo
                  }}>
                </Image>
              </View>
              <Text style={Styles.components.userName}>{this.state.data.driver.userName}</Text>
              <Text style={Styles.components.body2}>{this.state.data.driver.userEmail}</Text>
            </View>

            <View style={{
              height: 220,
              width: 150,
              margin: 'auto'
            }}>
              <Text style={{
                  fontSize: 18,
                  textAlign: 'center',
                  margin: 10,
                  color: Styles.colors.mainBlue
                }}>
                Your guide is
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
              }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    margin: 1,
                    borderRadius: 50
                  }}
                  source={{
                    uri: imgUri+this.state.data.guide.photo
                  }}>
                </Image>
              </View>
              <Text style={Styles.components.userName}>{this.state.data.guide.userName}</Text>
              <Text style={Styles.components.body2}>{this.state.data.guide.userEmail}</Text>
            </View>
          </View>
          <TouchableHighlight
              onPress={() => {this.props.nav(2, {city: this.props.data.city, tour: this.props.data.tour})}}
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
        ) }
      </View>
    );
  }
}

export { ReviewOrder };
