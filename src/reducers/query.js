import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchCityRequest,
  fetchCitySuccess,
  fetchCityFailure
} from '../actions/cityRequest';

export const isFetching = handleActions(
  {
    [fetchCityRequest]: () => true,
    [fetchCitySuccess]: () => false,
    [fetchCityFailure]: () => false
  },
  false
);

export const networkError = handleActions(
  {
    [fetchCityFailure]: () => true,
    [fetchCityRequest]: () => false
  },
  false
);

export const query = handleActions(
  {
    [fetchCityRequest]: (state, action) => action.payload
  },
  ''
);

export const cities = handleActions(
  {
    [fetchCitySuccess]: (state, action) => action.payload
  },
  []
);

export default combineReducers({ isFetching, networkError, query, cities });

// селектор filteredCities отдает обрезаный до 5 массив подсказок, и общую длинну массива
export const filteredCities = state => {
  const slicedCities = state.cities ? state.cities.slice(0, 5) : [];
  const citiesAmount = state.cities.length;
  return { cities: slicedCities, citiesAmount: citiesAmount };
};
