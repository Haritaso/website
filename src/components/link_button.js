import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  const { name, link } = props;
  return (
    <div className="linkButton">
      <Link to={link}>{name}</Link>
    </div>
  );
};

LinkButton.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  link: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default LinkButton;
