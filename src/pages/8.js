import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h3>Buzzword Alert!</h3>

      <p>JAMstack</p>
      <p>Serverless</p>
      <p>Static Site Generator</p>
      <p>PWA (progressive web app)</p>
  </div>
);
