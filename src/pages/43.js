import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>DEMO TIME...</h1>
    <p>* wish me luck</p>
  </div>
);