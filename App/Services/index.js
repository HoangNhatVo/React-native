import axios from 'axios';
import {AsyncStorage} from 'react-native';
import config from 'react-native-config';
//Import gateways
import UserGateway from '../Gateways/UserGateway';
//Import services
import UserService from './UserService';

const restConnector = axios.create({baseURL: config.API_URL});
const localStorageConnector = AsyncStorage;

const userGateway = new UserGateway({restConnector, localStorageConnector});

export const userService = new UserService(userGateway);
