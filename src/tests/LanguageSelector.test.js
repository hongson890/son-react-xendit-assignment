import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LanguageSelector from '../components/LanguageSelector';

const { i18n } = {};

describe('LanguageSelector', () => {
  it('render ok', () => {
    const component = shallow(<LanguageSelector />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
