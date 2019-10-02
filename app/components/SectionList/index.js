/**
 *
 * SectionList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'components/Spinner';
import List from 'components/List';
import './index.css';

const SectionList = ({ data }) =>
  data &&
  data.map(({ title, items, isFetching }) => (
    <div className="section-list" key={`section-list-${title}`}>
      <h2>{title}</h2>
      {isFetching ? <Spinner /> : <List title={title} items={items} />}
    </div>
  ));

SectionList.propTypes = {
  data: PropTypes.array,
};

export default SectionList;
