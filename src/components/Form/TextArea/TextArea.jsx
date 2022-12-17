import React from 'react';
import PropTypes from 'prop-types';
import s from './TextArea.module.css';

const TextArea = ({ rows, label, name, value, placeholder, maxLength, onChange }) => {
  const handleChange = (e) => {
    onChange(name, e);
  };

  return (
    <label className={s.label}>
      {label}
      <textarea
        className={s.textarea}
        value={value}
        name={name}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={handleChange}></textarea>

      <div className={s.message}>
        Characters left {maxLength - value.length} / {maxLength}
      </div>
    </label>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default TextArea;
