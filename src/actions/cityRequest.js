import { createActions } from 'redux-actions';
export const {
  fetchCityRequest,
  fetchCitySuccess,
  fetchCityFailure
} = createActions(
  'FETCH_CITY_REQUEST',
  'FETCH_CITY_SUCCESS',
  'FETCH_CITY_FAILURE'
);
