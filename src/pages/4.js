import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <Quote cite="Tom Dale (creator of ember.js)">
      In the same way that a compiled Android binary bears little resemblance to the original Java source code, the assets we serve to users will be the aggressively-optimized output of sophisticated build tools. The trend started by minifiers like UglifyJS and continued by transpilers like Babel will only accelerate.
    </Quote>
  </div>
);
