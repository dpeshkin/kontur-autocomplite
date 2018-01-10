import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import Main from './components/Main';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.css';
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
