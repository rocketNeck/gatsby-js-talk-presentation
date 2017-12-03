import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>Q: Who is Gatsby for?</h4>
    <h4>A: Devs who want to build lighting fast websites, <br />especially where much of the content is static.<br /> (blogs, business sites, marketing sites, eCommerce sites, web apps)</h4>
  </div>
);
