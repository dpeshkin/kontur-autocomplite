import React from 'react';
import { Main } from '../Main/Main';
import { shallow } from 'enzyme';

describe('Компонент Main', () => {
  const dispatchMock = jest.fn();
  const handleChangeMock = jest.fn();
  const wrapper = shallow(
    <Main fetchCityRequest={dispatchMock} onChange={handleChangeMock} />
  );
  describe('Стейт компоненты', () => {
    it('содержит поле query', () => {
      expect(wrapper.state().query).toBeDefined();
    });
    it(`поле query по умолчанию равно ''`, () => {
      expect(wrapper.state().query).toEqual('');
    });
  });
  describe('Содержит методы', () => {
    describe('handleChange', () => {
      it('присутствует', () => {
        expect(wrapper.instance().handleChange).toBeDefined();
      });
      it('При вызове положит значение input в state.query и отправит экшен fetchCityRequest(query)', () => {
        const e = { target: { name: 'city-input', value: 'Екатеринбург' } };
        wrapper.instance().handleChange(e);
        wrapper.update();
        expect(wrapper.state().query).toEqual('Екатеринбург');
        expect(dispatchMock).toBeCalledWith(wrapper.state().query.trim());
      });
    });
  });
  describe('Рендерит элементы', () => {
    describe('input', () => {
      it('name="city-input', () => {
        expect(
          wrapper.findWhere(
            el => el.type() === 'input' && el.prop('name') === 'city-input'
          )
        ).toHaveLength(1);
      });
    });
  });
});
