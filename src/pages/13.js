import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>PWA - Progressive Web App</h4>
    <Link to="https://developers.google.com/web/progressive-web-apps/" activeStyle={{clolor: 'red'}}>developers.google</Link><br />
    <small>A whole talk in itself... but quickly...</small>
  </div>
);
