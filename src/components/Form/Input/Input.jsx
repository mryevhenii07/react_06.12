import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Input.module.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.type = this.props.type || 'text';
  }

  handleChange = (e) => {
    this.props.onChange(this.props.name, e);
  };

  render() {
    const { label, type, name, value, placeholder, pattern } = this.props;

    return (
      <>
        <label className={s.label}>
          {label}
          <input
            className={s.input}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            pattern={pattern}
            onChange={this.handleChange}
          />
        </label>
      </>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
};

export default Input;
