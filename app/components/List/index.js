/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const List = ({ items }) => (
  <div>
    {items &&
      items.map(item => (
        <a
          className="item"
          key={`list-${item.id}`}
          rel="noreferrer"
          href={item.url}
          target="_blank"
        >
          {item.name}
        </a>
      ))}
  </div>
);

List.propTypes = {
  items: PropTypes.array,
};

export default List;
