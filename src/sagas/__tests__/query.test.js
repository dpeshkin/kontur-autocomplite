import {
  fetchCityRequest,
  fetchCitySuccess,
  fetchCityFailure
} from '../../actions/cityRequest';
import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchRequest } from '../../api';
import { fetchCityFlow } from '../query';

describe('Сага fetchCityFlow', () => {
  it('Вызывает метод fetchRequest из api, если прилетает экшен  fetchCityRequest', () => {
    const action = { payload: 'Ekaterinburg' };
    const saga = fetchCityFlow(action);
    expect(saga.next().value).toEqual(call(fetchRequest, action.payload));
  });
  it('Диспатчит экшен fetchCitySuccess c с данными, получеными от api', () => {
    const action = { payload: 'Ekaterinburg' };
    const response = [{ Id: 1, city: 'Ekaterinburg' }];
    const saga = fetchCityFlow(action);
    saga.next();
    expect(saga.next(response).value).toEqual(put(fetchCitySuccess(response)));
  });
  it('Диспатчит экшен fetchCityFailure с ошибкой, если api вернет ошибку', () => {
    const action = { payload: 'Ekaterinburg' };
    const error = new Error();
    const saga = fetchCityFlow(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchCityFailure(error)));
  });
});
