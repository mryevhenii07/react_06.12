import React, { Component } from 'react';
import PropTypes from "prop-types";
import s from './Header.module.css';

class Header extends Component {
  render() {
    const { text } = this.props;

    return <h1 className={s.header}>{text}</h1>;
  }
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
