import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Performance Features:</h1>
      <p>static, CDN, AMP, offline access, prefetch linked pages, page chaching, progressive image loading, responsive image loading, inlines critical CSS</p>
  </div>
);
