import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = (props) => {
  const { name, link } = props;
  return (
    <a href={link}>{name}</a>
  );
};

LinkButton.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
  ]).isRequired,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
  ]).isRequired,
};

export default LinkButton;
