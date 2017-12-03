import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h3>In this talk:</h3>
    <ol>
      <li>Some buzzword descriptions and ecosystem explanation</li><br/>
      <li>What is Gatsby?</li><br/>
      <li>Why should I know about it?</li><br />
      <li>What are some cons?</li>
    </ol>
  </div>
);
