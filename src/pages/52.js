import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Young Project</h1>
    <h3>Become a contributor, Fix bugs, YA!</h3>
  </div>
);