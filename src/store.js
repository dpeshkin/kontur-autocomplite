import { createStore } from 'redux';
import rootReducer from './reducers';

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
  return store;
};
