import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Navigator
} from 'react-native';
import { HomePage } from './mainTour/homePage';
import { LocationList } from './mainTour/locationList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
  }

  changePage(pageId) {
    this.setState({
      currentPage: pageId
    });
  }

  render() {
    const routes = [
      {page: <HomePage nav={this.changePage.bind(this)}/>, index: 0},
      {page: <LocationList nav={this.changePage.bind(this)}/>, index: 1}
    ];
    return (
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) => {
            return routes[this.state.currentPage].page;
          }
          }
        />
    );
  }
}

export default App;


/*
render() {
    const routes = [
      {page: <HomePage />, index: 0},
      {page: <LocationList />, index: 1}
    ];
    return (
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) => {
            return routes[1].page;
          }
          }
        />
    );
  }
  */

  // StackNavigator component method
  /*
   render() {
    const routes = StackNavigator({
      Main: {screen: HomePage},
      Location: {screen: LocationList}
    });
    return (

    );
  }
  */