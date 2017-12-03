import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <p><small><Link to="www.jamstack.org">(from jamstack.org)</Link></small></p>
    <h4>JavaScript</h4>
    <p><small>Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.</small></p>
    <h4>APIs</h4>
    <p><small>All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTP with JavaScript. These can be custom-built or leverage third-party services</small></p>
    <h4>Markup</h4>
    <p><small>Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.</small></p>
  </div>
);
