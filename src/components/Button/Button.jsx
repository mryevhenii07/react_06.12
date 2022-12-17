import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ text, disabled, onClick }) => {
  return (
    <button className={disabled ? s.disabled : s.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from './Button.module.css';

// class Button extends Component {
//   render() {
//     const { text, disabled, onClick } = this.props;

//     return (
//       <button className={disabled ? s.disabled : s.button} onClick={onClick} disabled={disabled}>
//         {text}
//       </button>
//     );
//   }
// }

// Button.defaultProps = {
//   onClick: () => {},
// };

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   disabled: PropTypes.bool,
// };

// export default Button;
