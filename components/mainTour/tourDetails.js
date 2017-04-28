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
  Modal,
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
      passengers: 1,
      modalVisible: false,
      cardNumber: '',
      expYear: '',
      expMonth: '',
      text: '',
      totalPrice: this.props.data.tour.price
    }
    var acceptBtn = () => {
      this.props.nav(1)
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onDateChange = (date) => {
    this.setState({
      date
    });
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
          <View style={Styles.tourDetails('topView')}>
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

                }}>
                  <DisplayPicker
                    selectedValue={this.state.passengers}
                    onValueChange={(quantity) => this.setState({
                      passengers: quantity,
                      totalPrice: quantity * this.props.data.tour.price,
                    })}
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
                    marginTop: 10,
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
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: Styles.colors.lightGreen,
                borderRadius: 5,
                alignSelf: 'stretch',
                marginBottom: 10,
                height: 30
              }}>
                <Text style={{
                  color: Styles.colors.lightGreen,
                  fontSize: 20
                }}>
                  Total Price
                </Text>
                <Text style={{
                  color: Styles.colors.lightGreen,
                  fontSize: 20
                }}>
                  {"$ " + this.state.totalPrice}
                </Text>
              </View>
            </View>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true)
              }}
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

          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}
            >
            <View style={{
              marginTop: 22,
              backgroundColor: Styles.colors.darkBlue,
              opacity: .95,
              height: height
            }}>
              <View style={{
                marginLeft: 40,
                marginRight: 40,
                borderWidth: 1.5,
                borderColor: Styles.colors.almostWhite,
                padding: 15,
                marginTop: 60,
                borderRadius: 5
              }}>

                <View>
                  <Image
                    source={require('../images/powered-by-stripe.png')}
                    style={{width: 255}}
                  />
                </View>


                <TextInput
                  style={Styles.components.cardInputs}
                  onChangeText={(cardNumber) => this.setState({cardNumber: cardNumber})}
                  placeholder={'credit card number'}
                />

                <TextInput
                  style={Styles.components.cardInputs}
                  onChangeText={(expYear) => this.setState({expYear: expYear})}
                  placeholder={'expiration year'}
                />

                <TextInput
                  style={Styles.components.cardInputs}
                  onChangeText={(expMonth) => this.setState({expMonth: expMonth})}
                  placeholder={'expiration month'}
                />

                <TextInput
                  style={Styles.components.cardInputs}
                  onChangeText={(cvc) => this.setState({cvc: cvc})}
                  placeholder={'cvc'}
                />

                <TouchableHighlight
                  onPress={() => {this.props.nav(3, {
                    city: this.props.data.city,
                    tour: this.props.data.tour,
                    info: this.state
                  }, {
                    cardNumber: this.state.cardNumber,
                    expYear: this.state.expYear,
                    expMonth: this.state.expMonth,
                    cvc: this.state.cvc,
                    totalPrice: this.state.totalPrice
                  })}}
                  style={{
                    backgroundColor: Styles.colors.lightGreen,
                    marginBottom: 15,
                    marginTop: 15,
                    height: 35,
                    borderRadius: 5
                  }}
                >
                  <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{
                      color: Styles.colors.almostWhite,
                      fontSize: 18
                    }}>Accept Payment for $ {this.props.data.tour.price * this.state.passengers}</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                  }}
                  style={{
                    backgroundColor: Styles.colors.almostWhite,
                    marginBottom: 15,
                    height: 35,
                    borderRadius: 5
                  }}
                >
                  <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text style={{
                      color: Styles.colors.lightGreen,
                      fontSize: 18
                    }}>Go Back</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>


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
        ]}>{this.props.data.description} {"\n $ " + this.props.data.price}</Text>
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
          borderRadius: 50
        }}
        itemStyle={{color:Styles.colors.mainBlue}}
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

class BackgroundImage extends Component {

    render() {
        return (
            <Image
              source={{uri: 'https://hostiso.com/wp-content/uploads/2016/05/hostiso-stripe.png'}}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover'}}>
            </Image>
        )
    }
}

export { TourDetails };
