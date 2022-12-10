import React from 'react';
import s from './FirstName.module.css';

const FirstName = ({ firstName, handelChange }) => {
  return (
    <label  className={s.label}>
      First Name
      <input
        className={s.input}
        type="text"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={handelChange}
      />
    </label>
  );
};

export default FirstName;
