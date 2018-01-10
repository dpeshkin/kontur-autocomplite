import { combineReducers } from 'redux';
import { query } from './query';
import { cities } from './cities';

export default combineReducers({ query, cities });
