import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Navigator
} from 'react-native';
import { Styles } from '../styles/styles.js';
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
      currentPage: 7,
      logged: false,
      profile: '',
      token: '',
      initialPage: 0,
      data: '',
      paymentInfo: ''
    };

    this.changePage = this.changePage.bind(this);
    this.login = this.login.bind(this);
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
      this.setState({ currentPage: pageId });
    }
  }

  login(info) {
    this.setState({
      currentPage: info.page,
      logged: info.logged,
      profile: info.profile,
      token: info.token
    });
  }

  render() {
    const routes = [
      {page: <HomePage nav={this.changePage} />, index: 0},
      {page: <ToursList
              nav={this.changePage}
              data={this.state.data}
              />, index: 1},
      {page: <TourDetails
              nav={this.changePage}
              data={this.state.data}
              />, index: 2},
      {page: <ReviewOrder
              nav={this.changePage}
              data={this.state.data}
              paymentInfo={this.state.paymentInfo}
              user={this.state.profile}
              />, index: 3},
      {page: <WelcomeView
              log={this.login}
              nav={this.changePage}
              />, index: 4},
      {page: <RegisterUser
              nav={this.changePage}
              data={this.state.profile}
              />, index: 5},
      {page: <UserProfile
              nav={this.changePage}
              data={this.state.data}
              />, index: 6},
      {page: <InitialOpen
              nav={this.changePage}
              log={this.login}
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
