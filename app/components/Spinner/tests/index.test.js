import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../index';

describe('<Spinner />', () => {
  it('should render the Spinner component', () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper.containsMatchingElement(<div className="spinner" />)).toBe(
      true,
    );
  });
});
