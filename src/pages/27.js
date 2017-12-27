import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Gatsby.js is designed with the goal that it’d be really really hard to build a slow site :)</h1>
  </div>
);