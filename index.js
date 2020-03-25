/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (!console.disableYellowBox) {
  YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Remote debugger is in a background tab',
    'Module ',
    'Class GenericShare',
    'Class GooglePlusShare',
    'Class WhatsAppShare',
    'Class InstagramShare',
  ]);
}

AppRegistry.registerComponent(appName, () => App);
