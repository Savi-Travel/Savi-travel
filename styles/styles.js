import {
  StyleSheet
} from 'react-native';

const fonts = {
  mainFont: 'Copperplate'
}

const colors = {
  dark: '#2C3E50',
  mainBlue: '#003171',
  jordyBlue: '#89C4F4',
  almostWhite: '#ecf0f1',
  lightBlue: '#4B77BE',
  middleBlue: '#1F4788',
  lightGreen: '#2ABB9B'
};

const components = StyleSheet.create({
  textColor: {
    color: colors.middleBlue
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
    borderColor: colors.mainBlue,
    padding: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15
  },

  general: {
    backgroundColor: colors.almostWhite
  },

  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: colors.mainBlue
  },

  displayPicker: {

  },

  datePickerIOS: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cityTitlesView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cityTitlesText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },

  bookTourButton: {
    backgroundColor: colors.lightGreen,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    height: 35,
    borderRadius: 5
  },

  goBackButton: {
    backgroundColor: colors.almostWhite,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 15,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mainBlue
  },

  buttonTransparent: {
    backgroundColor: colors.almostWhite,
    marginBottom: 15,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mainBlue
  },

  passengersCounter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.mainBlue,
    borderRadius: 5,
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
    backgroundColor: colors.mainBlue,
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

  location: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: colors.middleBlue
  },
  tourDesc: {
    backgroundColor: colors.mainBlue,
    padding: 10,
    color: colors.almostWhite,
    borderRadius: 5
  },
  tourTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.middleBlue,
    marginBottom: 10
  },
  h1: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: colors.mainBlue
  },
  h2: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: colors.almostWhite
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: colors.almostWhite
  },

  body2: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.mainBlue,
    marginTop: 4,
    fontFamily: fonts.mainFont
  },
  userName: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 0,
    fontWeight: 'bold',
    color: colors.middleBlue,
    fontFamily: fonts.mainFont
  },

  cardInputs: {
    height: 40,
    borderColor: colors.almostWhite,
    marginTop: 10,
    backgroundColor: colors.almostWhite,
    borderRadius: 5,
    paddingLeft: 10
  }
});

module.exports = {
  components: components,
  colors: colors,
  fonts: fonts
}