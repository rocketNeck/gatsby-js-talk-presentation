import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>The greatest Gatsby</h1>

    <small>An open source  project, <br />
    <span><i>static site generator</i>  <bold>OR</bold>  <i>javascript web framework</i> <bold>OR</bold> <i>pwa generator</i></span><br /><br />
    Built with React, Webpack, graphQL. 1.0.0 released in JULY 2017</small>
  </div>
);
