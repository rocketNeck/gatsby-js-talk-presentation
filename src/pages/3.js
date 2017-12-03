import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Tom Dale (creator of ember.js)">
      Increasingly, the bytes that get shipped to browsers will bear less and less resemblance to the source code that web developers write.
    </Quote>
  </div>
);
