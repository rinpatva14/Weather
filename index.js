import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import MainNavigator from './src/navigation';
AppRegistry.registerComponent(appName, () => MainNavigator);
