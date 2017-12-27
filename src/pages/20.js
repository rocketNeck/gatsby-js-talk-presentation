
import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Static Site Generator</h1>
    <Link to="www.staticgen.com" activeStyle={{color: 'red'}}>staticgen.com</Link>
    <p>A compromise between using a hand-coded static site and a full CMS.</p>
    <i><p>Is Gatsby just a static site generator?</p></i>
  </div>
);