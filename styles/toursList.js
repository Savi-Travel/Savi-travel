import assets from './assets.js';
// import Screen from '../components/welcome.js';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = function(element) {
  let properties = {
  	mainContainer: {
      height: height,
  		flex: 1,
			justifyContent: 'space-between'
  	},

    scrollContainer: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },

    titleWrapper: {
      width: width / 1.03
    },

    viewFrame: {
      flex: 1,
      flexDirection: 'column',
      width: width
    },

    viewFrameInner: {
      marginLeft: 30,
      marginRight: 30
    },

    imageFrame: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: assets.colors.mainBlue,
      padding: 5
    },

    tourImage: {
      height: height / 2,
      borderRadius: 5,
    },

    descriptionContainer: {
      marginTop: 20,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: assets.colors.mainBlue,
      borderRadius: 5
    },

    descriptionText: {
      backgroundColor: assets.colors.mainBlue,
      padding: 10,
      color: assets.colors.almostWhite,
      borderRadius: 5
    },

    buttonWrapper: {
      paddingRight: 30,
      paddingLeft: 30
    },

    buttonTransparent: {
      backgroundColor: assets.colors.almostWhite,
      marginBottom: 15,
      height: 35,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: assets.colors.mainBlue
    },

    buttonInner: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0
    },

    buttonText: {
      color: assets.colors.mainBlue,
      fontSize: 20
    },

  	location: {
      color: assets.colors.mainBlue,
	    fontSize: 50,
	    textAlign: 'center',
	    margin: 10
  	}
  }

  return properties[element];
}

