import React from 'react';
import { shallow } from 'enzyme';
import Spinner from 'components/Spinner';
import List from 'components/List';
import SectionList from '../index';

describe('<SectionList />', () => {
  it('should render the Spinner in SectionList component', () => {
    const data = [
      {
        title: 'Repos',
        items: [],
        isFetching: true,
      },
    ];
    const wrapper = shallow(<SectionList data={data} />);

    expect(
      wrapper.containsMatchingElement(
        <div className="section-list" key={`section-list-${data[0].title}`}>
          <h2>{data[0].title}</h2>
          <Spinner />
        </div>,
      ),
    ).toBe(true);
  });

  it('should render the SectionList component with data', () => {
    const data = [
      {
        title: 'Repos',
        items: [],
        isFetching: false,
      },
    ];
    const wrapper = shallow(<SectionList data={data} />);

    expect(
      wrapper.containsMatchingElement(
        <div className="section-list" key={`section-list-${data[0].title}`}>
          <h2>{data[0].title}</h2>
          <List title="Repos" items={data[0].items} />
        </div>,
      ),
    ).toBe(true);
  });
});
