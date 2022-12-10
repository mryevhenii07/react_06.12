import React from 'react';
import s from './LastName.module.css';

const LastName = ({ lastName, handelChange }) => {
  return (
    <label className={s.label}>
      Last Name
      <input
        className={s.input}
        type="text"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={handelChange}
      />
    </label>
  );
};

export default LastName;
