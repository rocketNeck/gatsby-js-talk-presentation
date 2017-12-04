import React from 'react';
import Link from 'gatsby-link';
import Code from '../components/Code'

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Show us!</h1>
    <Code>{include('code-snip1.js')}</Code>
  </div>
);
