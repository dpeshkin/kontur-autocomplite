import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import App from './App';
import { Provider } from 'react-redux';
import 'normalize.css';
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
