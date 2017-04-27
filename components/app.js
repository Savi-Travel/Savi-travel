import React, { Component } from 'react';
import Styles from '../styles/styles.js';
import {
  Text,
  Button,
  View,
  Navigator
} from 'react-native';
import { HomePage } from './mainTour/homePage';
import { ToursList } from './mainTour/toursList';
import { TourDetails } from './mainTour/tourDetails';
import { ReviewOrder } from './mainTour/reviewOrder';
import { WelcomeView } from './welcome';
import { RegisterUser } from './userPage/registerUser';
import { UserProfile } from './userPage/userProfile';
import { InitialOpen } from './initialPage/initialOpen';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 4,
      logged: false,
      profile: '',
      token: '',
      initialPage: 0,
      data: '',
      paymentInfo: ''
    };
  }

  componentWillMount() {
    // initial component

    // TBD - keep below or not
      // route from Initial Open page?
    // if (this.state.logged === false) {
    //   // changing page 4 to page 5
    //   // for registration page testing
    //   this.setState({ currentPage: 4 });
    // }
  }

  changePage(pageId, data, paymentInfo) {
    if (paymentInfo !== undefined) {
      this.setState({
        paymentInfo
      });
    }

    if (data !== undefined) {
      if (data.userAuthId) {
        this.setState({ profile: data.userAuthId });
      }
      this.setState({
        currentPage: pageId,
        data
      });
    } else {
      this.setState({
        currentPage: pageId
      });
    }
  }

  login(info) {
    this.setState({
      currentPage: info.page,
      logged: info.logged,
      profile: info.profile,
      token: info.token
    });
    // add POST request to backend
  }

  render() {
    const routes = [
      {page: <HomePage nav={this.changePage.bind(this)}/>, index: 0},
      {page: <ToursList
              nav={this.changePage.bind(this)}
              data={this.state.data}
              />, index: 1},
      {page: <TourDetails
              nav={this.changePage.bind(this)}
              data={this.state.data}
              />, index: 2},
      {page: <ReviewOrder
              nav={this.changePage.bind(this)}
              data={this.state.data}
              paymentInfo={this.state.paymentInfo}
              user={this.state.profile}
              />, index: 3},
      {page: <WelcomeView
              log={this.login.bind(this)}
              nav={this.changePage.bind(this)}
              />, index: 4},
      {page: <RegisterUser
              nav={this.changePage.bind(this)}
              data={this.state.profile}
              />, index: 5},
      {page: <UserProfile
              nav={this.changePage.bind(this)}
              data={this.state.data}
              />, index: 6},
      {page: <InitialOpen
              nav={this.changePage.bind(this)}
              log={this.login.bind(this)}
              />, index: 7}
    ];
    return (
      <Navigator
        style={Styles.components.general}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          return routes[this.state.currentPage].page;
        }}
      />
    );
  }
}

export default App;
