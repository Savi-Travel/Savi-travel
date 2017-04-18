import React, { Component } from 'react';
import { styles } from '../styles/styles.js';
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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      logged: false,
      profile: '',
      token: '',
      initialPage: 0,
      data: ''
    };
  }

  componentWillMount() {
    if (this.state.logged === false) {
      this.setState({ currentPage: 4 });
    }
  }

  changePage(pageId, data) {
    if (data !== undefined) {
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
              />, index: 3},
      {page: <WelcomeView log={this.login.bind(this)}/>, index: 4}
    ];
    return (
      <Navigator
        style={styles.general}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          return routes[this.state.currentPage].page;
        }
        }/>
    );
  }
}

export default App;
