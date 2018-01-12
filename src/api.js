// имитация работы с сетью

import cities from './kladr.json';

//ПАРАМЕТР delay задает время задержки ответа с сервера, необходим для проверки п.20
const delay = 2000;

const networkError = false;

export const filterCity = query => {
  let filteredCities = [];
  for (let city of cities) {
    if (
      query !== '' &&
      city.City &&
      city.City.toLowerCase().indexOf(query.toLowerCase()) === 0
    ) {
      filteredCities.push({ Id: city.Id, City: city.City });
    }
  }
  return filteredCities;
};

export const fetchRequest = query => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(query);
    }, delay);
  }).then(query => {
    return filterCity(query);
  });
};
