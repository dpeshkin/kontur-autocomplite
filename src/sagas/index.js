import { fork } from 'redux-saga/effects';
import { cityRequestWatch } from './query';

export default function*() {
  yield fork(cityRequestWatch);
}
