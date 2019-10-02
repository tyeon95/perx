import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../index';

describe('<TextInput />', () => {
  it('should render the TextInput component', () => {
    const wrapper = shallow(<TextInput />);

    expect(
      wrapper.containsMatchingElement(
        <div className="input-container">
          <input className="input-text" type="text" required />
        </div>,
      ),
    ).toBe(true);
  });
});
