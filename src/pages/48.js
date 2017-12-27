import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Learning Curve</h1>
    <h3>GraphQL</h3>
    <h3>React</h3>
  </div>
);