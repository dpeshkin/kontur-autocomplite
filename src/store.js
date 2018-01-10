import { createStore } from 'redux';
import rootReducer from './reducers';
import citiesBase from './kladr.json';

const initialState = { cities: citiesBase.map(el => el.City) }; // это временное решение
//по уму надо написать миддл с иммитации загрузки списка городов
export default () => {
  const store = createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
  return store;
};
