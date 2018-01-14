//delay задает время задержки ответа с сервера, задайте значение >500 чтобы проверить соответсвие п.20
const delay = 100;

//networkError имитирует ошибку сервера, задайте значение true, чтобы проверить соответствие п.21
const networkError = false;

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

export const fetchRequest = query => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './kladr.json', true);
    xhr.onload = () => {
      setTimeout(() => {
        resolve(JSON.parse(xhr.response));
      }, delay);
    };
    xhr.send();
  }).then(result => {
    if (networkError) throw new Error();
    return filterCity(query, result);
  });
};
