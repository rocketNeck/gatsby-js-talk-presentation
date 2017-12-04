import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Ways to think about Gatsby</h2>
    <p>1. Gatsby is designed with the goal that it’d be really really hard to build a slow site :)</p>

    <p>2. Gatsby is a website compiler</p>

    <p>3. You give Gatsby the “source code” for a website and it compiles the most performant website possible. Compilers regularly add optimizations. You’re probably already using several compilers (babel for JS/React, Webpack for bundles, Sass for CSS)</p>
  </div>
);
