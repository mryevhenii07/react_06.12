import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './TextArea.module.css';

class TextArea extends Component {
  handleChange = (e) => {
    this.props.onChange(this.props.name, e);
  };

  render() {
    const { rows, label, name, value, placeholder, maxLength } = this.props;

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
          onChange={this.handleChange}></textarea>

        <div className={s.message}>
          Characters left {maxLength - value.length} / {maxLength}
        </div>
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default TextArea;
