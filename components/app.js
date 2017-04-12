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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      data: ''
    };
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
              />, index: 3}
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
