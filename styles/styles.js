import {
  StyleSheet
} from 'react-native';

const textGreen = '#85CCB9';
const sandColor = '#FFFEE4';
const whiteColor = 'white';

const styles = StyleSheet.create({
  locationPage: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: textGreen
  },

  location: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: textGreen
  },

  tourDesc: {
    margin: 5,
    color: '#85CCB9'
  },

  tourTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: textGreen
  },

  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    color: textGreen
  },

  general: {    
    backgroundColor: sandColor    
  },

  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: textGreen
  },

  displayPicker: {
  
  },

  detailsDescription: {
    borderWidth: 2,
    borderColor: textGreen,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20
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
    color: whiteColor, 
    fontSize: 35,
    fontWeight: 'bold'                                      
  },

  passengersCounter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  getTourButton: {
    backgroundColor: textGreen
  }
});

module.exports = {
  styles: styles
}