import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
