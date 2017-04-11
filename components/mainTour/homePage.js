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
// import { LocationList } from './locationList';

const styles = StyleSheet.create({
  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dummyData = [
  {
    "id": 1,
    "description": "Skip the line to the Paris Catacombs and discover a darker side to the City of Lights. Descend beneath the streets of Paris and listen to the commentary from your informative audio guide, available in 4 languages.",
    "mainImage": "https://pbs.twimg.com/media/C4QNypEWEAQT32x.jpg",
    "createdAt": "2017-04-10T23:33:26.000Z",
    "updatedAt": "2017-04-10T23:33:26.000Z",
    "cityId": 1
  },
  {
    "id": 2,
    "description": "See London from a different perspective on the London Eye and enjoy the new 4D Experience, a groundbreaking 3D film with spectacular in-theater effects that include wind, bubbles, and mist. Fast-track admission is also available.",
    "mainImage": "https://media.timeout.com/images/100644443/image.jpg",
    "createdAt": "2017-04-10T23:33:26.000Z",
    "updatedAt": "2017-04-10T23:33:26.000Z",
    "cityId": 2
  },
  {
    "id": 3,
    "description": "Enjoy a marvellous canal cruise in Amsterdam on board of a semi-open electric boat with zero emissions, and benefit from an audioguide in 19 different languages!",
    "mainImage": "https://triptravel.es/wp-content/uploads/2017/03/escapada_a_amsterdam_en_febrero_marzo_y_abril-reservas-hoteles_en_amsterdam-restaurantes_en_amsterdam-vacaciones_en_paises_bajos-lunas_de_miel_en_amsterdam-viajes_a_paises_bajos-vuelos_a_paises_bajos-1024x538.jpg",
    "createdAt": "2017-04-10T23:33:26.000Z",
    "updatedAt": "2017-04-10T23:33:26.000Z",
    "cityId": 3
  },
  {
    "id": 4,
    "description": "See 2 of the most iconic sights of Rio de Janeiro on a 4-hour guided tour of Corcovado and the Selarón Steps. Add-on Sugar Loaf Mountain on a 6-hour tour, and see Rio from different perspectives. Marvel at Chilean artist Jorge Selarón’s ceramic art steps!",
    "mainImage": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3n0PS3xp282FtZw0j9_Cd789HepQ0_ons1woN6tykGPUoS5GI",
    "createdAt": "2017-04-10T23:33:26.000Z",
    "updatedAt": "2017-04-10T23:33:26.000Z",
    "cityId": 4
  },
  {
    "id": 5,
    "description": "For tourists who only have a short layover in Shanghai, taking sightseeing bus to explore the beauty of the city undoubtedly is a good idea. In this way, visitors can squeeze limited time to tour around more must-sees during their one or two day(s) trip.",
    "mainImage": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROreloGGsSrsPROFFx2uX3ziyWnKGtcZ63ubREZS5By1v3BP6Y",
    "createdAt": "2017-04-10T23:33:26.000Z",
    "updatedAt": "2017-04-10T23:33:26.000Z",
    "cityId": 5
  },
  {
    "id": 6,
    "description": "The open-top Big Bus sightseeing tour is the most enjoyable and convenient way to see New York! You’ll see famous landmarks such as the iconic Empire State Building to the new One World Trade Center.",
    "mainImage": "https://only-apartments.storage.googleapis.com/web/imgs/city/New-York_Small.jpg",
    "createdAt": "2017-04-10T23:33:26.000Z",
    "updatedAt": "2017-04-10T23:33:26.000Z",
    "cityId": 6
  }
];
    var {width, height} = Dimensions.get('window');
    return (
      <View>
        <Text style={styles.logo}>Savi Travel</Text>
        <ScrollView>
            {dummyData.map((item, i) => {
              return (
                <View key={i}>
                  <Text>{item.cityId}</Text>
                  <TouchableHighlight onPress={() => {this.props.nav(2)}}>
                    <Image source={{uri: item.mainImage}}
                      style={{width: width / 1.03, height: height / 4, margin: 5}}
                    />
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
