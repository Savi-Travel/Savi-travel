import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'lightblue'
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    fetch('https://savi-travel.com:8080/api/cities')
      .then(resp => resp.json())
      .then(data => this.setState({data}))
      .catch(err => console.error(err));
  }

  render() {
    let {width, height} = Dimensions.get('window');
    let port = 8080;
    let imgUri = `https://savi-travel.com:${port}/api/images/`;
    return (
      <View>
        <Text style={styles.logo}>Savi Travel</Text>
        <ScrollView>
            {this.state.data.map((item, i) => {
              return (
                <View key={i}>
                  <TouchableHighlight
                    onPress={() => {this.props.nav(1, {id: item.id, name: item.name})}}
                  >
                    <Image source={{uri: imgUri + item.mainImage}}
                      style={{width: width, height: height / 4}}
                    >
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}> {item.name}</Text>
                    </Image>
                  </TouchableHighlight>
                </View>
              )
            })}
        </ScrollView>
      </View>

    );
  }
}

export { HomePage };
