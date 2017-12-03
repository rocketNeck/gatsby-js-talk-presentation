import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    Gatsby sites fall into the JAMstack paradigm<br />
    Gatsby is a static site generator, but also a web app framework.<br />
    Gatsby is a PWA generator, out of the box <br />
    Gatsby is a prime use-case for serverless architecture
  </div>
);
