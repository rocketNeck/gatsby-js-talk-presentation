import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>Q: What’s the goal of Gatsby?</h4>
    <h4>A: To take the best ideas from web apps and tooling and build websites with them</h4>
      <ul>
        <li>Fast</li>
        <li>JS driven</li>
        <li>Cheap $$</li>
        <li>Ready for the future ( ie: people with slow connections 2G 3G)</li>
        <li>plugins + themes</li>
      </ul>
  </div>
);
