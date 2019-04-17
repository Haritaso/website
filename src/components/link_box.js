import React from 'react';
import LinkButton from './link_button';

const LinkBox = () => {
  return (
    <div className="main">
      <LinkButton name="Home" link="/" />
      <LinkButton name="Profile" link="/profile" />
      <LinkButton name="Works" link="/works" />
      <LinkButton name="Contact" link="/contact" />
    </div>
  );
};

export default LinkBox;
