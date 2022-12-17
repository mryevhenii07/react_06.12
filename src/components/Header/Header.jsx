import React from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.css';

const Header = ({ text }) => {
  return <h1 className={s.header}>{text}</h1>;
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
