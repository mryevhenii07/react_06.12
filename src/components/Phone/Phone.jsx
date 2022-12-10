import React from 'react';
import s from './Phone.module.css';

const Phone = ({ phone, handelChange }) => {
  return (
    <label className={s.label}>
      Phone
      <input
        className={s.input}
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={handelChange}
      />
    </label>
  );
};

export default Phone;
