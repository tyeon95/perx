/**
 *
 * TextInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TextInput = ({ input, onChange }) => (
  <div className="input-container">
    <input
      className="input-text"
      type="text"
      required
      onChange={({ target: { value } }) => onChange(value)}
      value={input}
    />
  </div>
);

TextInput.propTypes = {
  input: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
