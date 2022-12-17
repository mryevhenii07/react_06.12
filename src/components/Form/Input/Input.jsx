import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ type, name, onChange, label, value, placeholder, pattern }) => {
  type = type || 'text';

  const handleChange = (e) => {
    onChange(name, e);
  };

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
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
};

export default Input;
