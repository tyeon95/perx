import React from 'react';
import { shallow } from 'enzyme';
import List from '../index';

describe('<List />', () => {
  it('should render empty div', () => {
    const data = [];
    const wrapper = shallow(<List data={data} />);

    expect(wrapper.containsMatchingElement(<div />)).toBe(true);
  });

  it('should render list item', () => {
    const data = [
      {
        id: 1,
        url: 'github.com',
        name: 'gh',
      },
    ];
    const wrapper = shallow(<List items={data} />);

    expect(
      wrapper.containsMatchingElement(
        <div>
          <a
            className="item"
            key={`list-${data[0].id}`}
            rel="noreferrer"
            href={data[0].url}
            target="_blank"
          >
            {data[0].name}
          </a>
        </div>,
      ),
    ).toBe(true);
  });
});
