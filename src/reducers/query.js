import { handleAction } from 'redux-actions';
import { cityRequest } from '../actions/cityRequest';
export const query = handleAction(
  cityRequest,
  (state, action) => action.payload,
  ''
);

//селектор citiesFilter фильрует города из списка
export const citiesFilter = state => {
  let tipsList = [];
  let { cities, query } = state;

  for (let city of cities) {
    if (
      query !== '' &&
      city &&
      city.toLowerCase().indexOf(query.toLowerCase()) === 0
    ) {
      tipsList.push(city);
    }
  }

  return {
    query: query,
    cities: tipsList.slice(0, 5),
    citiesAmount: tipsList.length
  };
};
