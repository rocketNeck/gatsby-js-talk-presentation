import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Back to the Slides...</h1>
    <p>* Well that went well  ;)</p>
  </div>
);