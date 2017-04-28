import {
  StyleSheet
} from 'react-native';
import home from './home.js';
import toursList from './toursList.js';
import tourDetails from './tourDetails.js';
import assets from './assets.js';

const components = StyleSheet.create({
  textColor: {
    color: assets.colors.middleBlue
  },

  location: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: assets.colors.middleBlue
  },

  locationPage: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },

  bodyText: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: assets.colors.mainBlue,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15
  },

  general: {
    backgroundColor: assets.colors.almostWhite
  },

  displayPicker: {

  },

  datePickerIOS: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookTourButton: {
    backgroundColor: assets.colors.lightGreen,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    height: 35,
    borderRadius: 5
  },

  goBackButton: {
    backgroundColor: assets.colors.almostWhite,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: assets.colors.mainBlue
  },

  passengersCounter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: assets.colors.mainBlue,
    // borderRadius: 5,
    marginLeft: 30,
    marginRight:30,
    padding: 25
  },

  counterInnerWrapper: {
    flex: 1,
    flexDirection: 'column'
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: assets.colors.mainBlue,
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 169,
    width: 151,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tourTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: assets.colors.middleBlue,
    marginBottom: 10
  },
  h1: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: assets.colors.mainBlue
  },
  h2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: assets.colors.almostWhite
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: assets.colors.almostWhite
  },

  body2: {
    fontSize: 15,
    textAlign: 'center',
    color: assets.colors.mainBlue,
    marginTop: 4,
    fontFamily: assets.fonts.mainFont
  },
  userName: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
    color: assets.colors.middleBlue,
    fontFamily: assets.fonts.mainFont
  },

  cardInputs: {
    height: 40,
    borderColor: assets.colors.almostWhite,
    marginTop: 10,
    backgroundColor: assets.colors.almostWhite,
    borderRadius: 5,
    paddingLeft: 10
  }
});

const Styles = {
  components: components,
  home: home,
  toursList: toursList,
  tourDetails: tourDetails,
  colors: assets.colors,
  fonts: assets.fonts
};

export { Styles }