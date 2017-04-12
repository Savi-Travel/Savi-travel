import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  locationPage: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },

  bodyText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  },

  general: {
    // backgroundColor: '#FFC546',
    backgroundColor: '#FFFEE4'    
  },

  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    // color: '#88FFEB'
    color: '#85CCB9'    
    // color: '#8EFFDB'    
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

  paragraph: {
    color: '#5AFFD3', 
  },

  heading: {

  },

  passengersCounter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = {
  styles: styles
}