import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Gatsby, is it great?</h1>

    <small>An open source  project, <br />
    <span><i>static site generator</i>  <bold>||</bold>  <i>javascript web framework</i> <bold>||</bold> <i>PWA generator</i></span><br /><br />
    Built with React, Webpack, graphQL. 1.0.0 released in JULY 2017</small>
  </div>
);
