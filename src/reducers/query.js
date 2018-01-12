import { handleAction, handleActions } from 'redux-actions';
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
    [fetchCitySuccess]: () => false,
    [fetchCityFailure]: () => true
  },
  false
);
export const query = handleAction(
  fetchCityRequest,
  (state, action) => action.payload,
  ''
);

export const cities = handleAction(
  fetchCitySuccess,
  (state, action) => action.payload,
  []
);

// селектор filteredCities отдает обрезаный до 5 массив подсказок, и общую длинну массива
export const filteredCities = state => {
  const slicedCities = state.cities ? state.cities.slice(0, 5) : [];
  const citiesAmount = state.cities.length;
  return { cities: slicedCities, citiesAmount: citiesAmount };
};
