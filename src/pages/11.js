import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>Serverless</h4>
    <p>A talk in itself... in fact, we just had one...</p>
  </div>
);
