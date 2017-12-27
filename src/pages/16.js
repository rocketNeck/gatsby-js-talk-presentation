import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>JAMstack: noun \’jam-stak’\ <br/><br/>
Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</h4>
  </div>
);
