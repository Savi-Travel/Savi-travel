import assets from './assets.js';

module.exports = function(element) {
  let properties = {
    logo: {
      color: assets.colors.mainBlue,
      fontFamily: assets.fonts.mainFont,
      fontSize: 50,
      textAlign: 'center',
      margin: 10
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
    }
  }

  return properties[element];
}

