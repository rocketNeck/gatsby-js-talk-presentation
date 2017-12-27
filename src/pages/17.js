import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>"Serverless" a talk in itself...</h1>
    <img src="https://res.cloudinary.com/lq0vmwmms/image/upload/v1514398639/serverless_ex_t1ghtz.png" />
  </div>
);

