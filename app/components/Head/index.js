/**
 *
 * Head
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({ title, meta }) =>
  title || meta ? (
    <Helmet>
      <title>{title}</title>
      <meta {...meta} />
    </Helmet>
  ) : null;

Head.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Head;
