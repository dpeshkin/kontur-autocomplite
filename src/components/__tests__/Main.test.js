import React from 'react';
import { Main } from '../Main/Main';
import { shallow } from 'enzyme';

describe('Компонент Main', () => {
  const wrapper = shallow(<Main />);
  describe('Содержит методы', () => {
    it('handleChange', () => {
      expect(wrapper.instance().handleChange).toBeDefined();
    });
  });
});
