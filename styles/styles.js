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
    backgroundColor: '#FFC546'
  },

  logo: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#508BFF'
  },

  displayPicker: {
    backgroundColor: '#508BFF'
  },

  cityTitlesView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'                      
  },

  cityTitlesText: {                        
    color: 'white', 
    fontSize: 35                                      
  }
});

module.exports = {
  styles: styles
}