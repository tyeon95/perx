import React from 'react';
import { shallow } from 'enzyme';
import Head from 'components/Head';
import TextInput from 'components/TextInput';
import SectionList from 'components/SectionList';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('should render the HomePage component', () => {
    const wrapper = shallow(
      <HomePage
        dispatch={() => {}}
        fetch={() => {}}
        data={{ repos: [], orgs: [] }}
        isFetching={{ repos: false, orgs: false }}
      />,
    );

    expect(
      wrapper.containsMatchingElement(
        <main className="main-layout">
          <Head title="Github stalk" />
          <article>
            <h1>Stalk thy github</h1>
            <TextInput />
            <div className="main-layout__content">
              <SectionList />
            </div>
          </article>
        </main>,
      ),
    ).toBe(true);
  });
});
