import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Static</h1>
    <i><p>maybe not best for your situation</p></i>
  </div>
);