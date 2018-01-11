// имитация работы с сетью
import cities from './kladr.json';

const filterCity = (query, cities) => {
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

export const fetchRequest = (query, delay) => {
  let request = new Promise(resolve => {
    resolve(query);
    reject(Error('NetworkProblem'));
  });
  request.then;
};
