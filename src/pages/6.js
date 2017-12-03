import React from 'react';
import Link from 'gatsby-link';
import Quote from '../components/Quote'

export default ({ transition }) => (
  <div style={transition && transition.style}>
      <Quote cite="Kyle Mathews - creator of GatsbyJS">
        A lot of people talk about JavaScript fatigue, that it's hard to set up a really powerful working environment that's customized to how you like to do web stuff. And a lot of that's just because configuring, our primary tool these days, webpack, is kind of a low-level, sometimes poorly-documented, sometimes really weird experience. It's powerful, but it's a lot of friction to getting to a stable setup.
      </Quote>
  </div>
);
