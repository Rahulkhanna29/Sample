/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Appi from './components/Appi';
import CustomTextInput from './components/CustomTextInput';
import ListView from './components/ListView';
import Maps from './components/Maps';
import RkContact from './components/RkContact';
import Sample2 from './components/Sample2';
import Contactfindbynumber from './components/Contactfindbynumber';
import ZAList from './components/ZAList';
import SearchApi from './components/SearchApi';
import MyFirebase from './components/MyFirebase';
import SocialButton from './components/SocialButton';
import GoogleSignIn from './components/SocialButton';

AppRegistry.registerComponent(appName, () =>ZAList);
