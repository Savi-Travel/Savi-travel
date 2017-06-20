import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    margin: 2
  }
});

// Component: Available cities
class CitySelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      city: '',
      query: ''
    };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:8080/api/cities')
      .then(resp => resp.json())
      .then(data => this.setState({locations: data}))
      .catch(err => console.error(err));
  }

  findCity (query) {
    if (query === '') {
      return [];
    }

    const { locations } = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return locations.filter(location => location.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    const cities = this.findCity(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize='none'
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={cities.length === 1 && comp(query, cities[0].name) ? [] : cities}
          defaultValue={query}
          onChangeText={text => {
            this.props.regCity(text);
            this.setState({ query: text });
          }}
          placeholder='City'
          renderItem={({ name }) => (
            <TouchableOpacity onPress={() => {
              this.props.regCity(name);
              this.setState({ query: name });
            }}>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export { CitySelector };
