import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Static</h1>
    <h3>webhooks + $build</h3>
  </div>
);