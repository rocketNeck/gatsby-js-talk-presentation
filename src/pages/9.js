import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    JAMstack: noun \’jam-stak’\ <br/>
Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
  </div>
);
