import { combineReducers } from 'redux';
import { isFetching, networkError, query, cities } from './query';

export default combineReducers({ isFetching, networkError, query, cities });
