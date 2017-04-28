import assets from './assets.js';
// import Screen from '../components/welcome.js';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

module.exports = function(element) {
  let properties = {
    topView: {
      height: height
    }
  }

  return properties[element];
}