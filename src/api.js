import cities from './kladr.json';

//delay задает время задержки ответа с сервера, измените значение чтобы проверить соответсвие п.20
const delay = 10000000;

//networkError имитирует ошибку сервера, задайте значение true, чтобы проверить соответствие п.21
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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(query);
    }, delay);
  }).then(query => {
    if (networkError) throw new Error();
    return filterCity(query);
  });
};
