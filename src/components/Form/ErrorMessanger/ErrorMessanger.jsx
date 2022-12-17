import React from 'react';
import s from './ErrorMessanger.module.css';

const ErrorMessage = ({ error }) => {
  if (error === '') {
    return null;
  }

  return <div className={s.errorMsg}>{error}</div>;
};

export default ErrorMessage;
