import {
  fetchCityRequest,
  fetchCitySuccess,
  fetchCityFailure
} from '../actions/cityRequest';
import { takeLatest, put, call } from 'redux-saga/effects';
import { filterCity } from '../api';

export function* fetchCityFlow(action) {
  try {
    const result = yield call(filterCity, action.payload);
    yield put(fetchCitySuccess(result));
  } catch (error) {
    yield put(fetchCityFailure(error));
  }
}

export function* cityRequestWatch() {
  yield takeLatest(fetchCityRequest, fetchCityFlow);
}
