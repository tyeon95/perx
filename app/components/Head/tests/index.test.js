import React from 'react';
import { shallow } from 'enzyme';
import { Helmet } from 'react-helmet';

import Head from '../index';

describe('<Head />', () => {
  it('should render no Helmet', () => {
    const header = shallow(<Head />);
    expect(header.find(Helmet)).toHaveLength(0);
  });

  it('should render Helmet', () => {
    const header = shallow(<Head title="dummy" />);
    expect(header.find(Helmet)).toHaveLength(1);
  });

  it('should render Helmet', () => {
    const header = shallow(
      <Head
        meta={{
          name: 'dummy name',
          content: 'dummy description',
        }}
      />,
    );
    expect(header.find(Helmet)).toHaveLength(1);
  });
});
