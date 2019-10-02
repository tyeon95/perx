/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Head from 'components/Head';
import TextInput from 'components/TextInput';
import SectionList from 'components/SectionList';
import reducer from './reducer';
import saga from './saga';
import { fetchUser } from './actions';
import './index.css';

// TODO: display errors nicely
export const HomePage = ({ fetch, data: { repos, orgs }, isFetching }) => {
  const [user, setUser] = useState('');
  useEffect(() => {
    if (user) {
      // TODO: cleanse user input?
      fetch(user);
    }
  }, [user]);
  const data = [
    {
      title: 'Repos',
      items: repos,
      isFetching: isFetching.repos,
    },
    {
      title: 'Orgs',
      items: orgs.map(org => ({ ...org, name: org.login })),
      isFetching: isFetching.orgs,
    },
  ];

  return (
    <main className="main-layout">
      <Head title="Github stalk" />
      <article>
        <h1>Stalk thy github</h1>

        <TextInput input={user} onChange={setUser} />

        <div className="main-layout__content">
          <SectionList data={data} />
        </div>
      </article>
    </main>
  );
};

/* istanbul ignore next */
HomePage.propTypes = {
  fetch: PropTypes.func,
  data: PropTypes.shape({
    repos: PropTypes.array,
    orgs: PropTypes.array,
  }),
  isFetching: PropTypes.shape({
    repos: PropTypes.bool,
    orgs: PropTypes.bool,
  }),
};

/* istanbul ignore next */
const mapStateToProps = state => {
  const {
    home: { data, error, isFetching },
  } = state;
  return {
    data,
    error,
    isFetching,
  };
};

/* istanbul ignore next */
const mapDispatchToProps = dispatch => ({
  fetch: user => dispatch(fetchUser(user)),
});

/* istanbul ignore next */
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

/* istanbul ignore next */
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
