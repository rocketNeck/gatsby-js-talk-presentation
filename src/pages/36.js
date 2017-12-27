import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Nuts + Bolts</h1>
  </div>
);