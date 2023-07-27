// import React from 'react';
import PropTypes from 'prop-types';
import './Title.css'; // If you are using Sass, import the styles here

export default function Title({ children, level, ...restProps }) {
  let levels = new Set([1, 2, 3, 4]);
  let Element = 'h1';

  if (levels.has(level)) {
    Element = `h${level}`;
  }
  return <Element {...restProps}>{children}</Element>;
}

// Title.propTypes = {,
//   text: PropTypes.string.isRequired,
// };
