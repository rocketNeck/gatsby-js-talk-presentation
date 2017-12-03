import React from 'react';
import Link from 'gatsby-link';
import Code from '../components/Code';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h4>PWA - Progressive Web App</h4>
    <Link to="https://developers.google.com/web/progressive-web-apps/" activeStyle={{clolor: 'red'}}>developers.google</Link><br />

      <i>Reliable:</i>    Load fast and provide offline functionality <br/>
      <i>Fast:</i>        Respond quickly to user interactions<br/>
      <i>Engaging:</i>    Feel like a native app on mobile devices <br/><br />

      <Code>`const progressiveWebAppFeatures = [ ...website, "push", "home screen icons", "work off line", "search-then-use" ]`</Code>

  </div>
);
