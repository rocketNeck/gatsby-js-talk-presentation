import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>Static Site Generator</h4>
    <small><Link to="www.staticgen.com" activeStyle={{color: 'red'}}>staticgen.com</Link></small>
    <p>A compromise between using a hand-coded static site and a full CMS.</p>
    <p>Is Gatsby a static site generator?</p>
  </div>
);
