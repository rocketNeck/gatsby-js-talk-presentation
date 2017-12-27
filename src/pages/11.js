import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>1. Some buzzword descriptions and ecosystem explanation</h4>
    <h4>2. Features and selling points.</h4>
    <h4>3. What is Gatsby? / nuts and bolts.</h4>
    <h4>4. Demo!</h4>
  </div>
);