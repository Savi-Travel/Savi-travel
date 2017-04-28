import assets from './assets.js';
import Screen from '../components/welcome.js';

module.exports = function(element) {
  let properties = {
    topView: {
      height: Screen.size.height
    }
  }

  return properties[element];
}