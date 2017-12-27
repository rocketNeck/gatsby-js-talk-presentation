import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h3>Some buzzword descriptions and ecosystem explanation</h3>
    <ol>
      <li></li><br/>
      <li>What is Gatsby?</li><br/>
      <li>Why should I know about it?</li><br />
      <li>What are some cons?</li>
    </ol>
  </div>
);


import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h3>Buzzword Alert!</h3>

      <p>JAMstack</p>
      <p>Serverless</p>
      <p>Static Site Generator</p>
      <p>PWA (progressive web app)</p>
  </div>
);


import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    JAMstack: noun \’jam-stak’\ <br/>
Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.
  </div>
);


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


import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>Serverless</h4>
    <p>A talk in itself... in fact, we just had one...</p>
  </div>
);

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



import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>PWA - Progressive Web App</h4>
    <Link to="https://developers.google.com/web/progressive-web-apps/" activeStyle={{clolor: 'red'}}>developers.google</Link><br />
    <small>A whole talk in itself... but quickly...</small>
  </div>
);
