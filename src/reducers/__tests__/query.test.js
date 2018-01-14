import query from '../query';
import {
  fetchCityRequest,
  fetchCitySuccess,
  fetchCityFailure
} from '../../actions/cityRequest';

describe('В редюсере query', () => {
  describe('Экшен fetchCityRequest', () => {
    const payload = 'Ekaterinburg';
    it('изменяет поле isFetching с false на true', () => {
      const next = query({ isFetching: false }, fetchCityRequest(payload));
      expect(next.isFetching).toBeTruthy();
    });
    it('изменяет поле networkError с true на false', () => {
      const next = query({ networkError: true }, fetchCityRequest(payload));
      expect(next.networkError).toBeFalsy();
    });
    it('изменяет поле query с "" на свой payload', () => {
      const next = query({ query: '' }, fetchCityRequest(payload));
      expect(next.query).toEqual(payload);
    });
  });
  describe('Экшен fetchCitySuccess', () => {
    const payload = [{ id: 1, city: 'Ekaterinburg' }];
    it('изменяет поле isFetching с true на false', () => {
      const next = query({ isFetching: true }, fetchCitySuccess(payload));
      expect(next.isFetching).toBeFalsy();
    });
    it('изменяет поле cities с [] на свой payload', () => {
      const next = query({ cities: '' }, fetchCitySuccess(payload));
      expect(next.cities).toEqual(payload);
    });
  });
  describe('Экшен fetchCityFailure', () => {
    it('изменяет поле isFetching с true на false', () => {
      const next = query({ isFetching: true }, fetchCityFailure());
      expect(next.isFetching).toBeFalsy();
    });
    it('изменяет поле networkError с false на true', () => {
      const next = query({ networkError: true }, fetchCityFailure());
      expect(next.networkError).toBeTruthy();
    });
  });
});
