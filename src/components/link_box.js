import React from 'react';
import LinkButton from './link_button';

const LinkBox = () => {
  return (
    <div className="main">
      <LinkButton name="Home" link="/" />
      <LinkButton name="Profile" link="/" />
      <LinkButton name="Works" link="/" />
      <LinkButton name="Contact" link="/" />
    </div>
  );
};

export default LinkBox;
