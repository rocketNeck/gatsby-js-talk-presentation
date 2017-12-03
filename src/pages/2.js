import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Tom Dale (creator of ember.js)">
      When it comes to eking performance out of hand-authored JavaScript and accompanying runtime libraries, we’ve reached the point of diminishing returns.
    </Quote>
  </div>
);
