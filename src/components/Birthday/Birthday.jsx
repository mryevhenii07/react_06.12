import React from 'react';
import s from './Birthday.module.css';

const Birthday = ({ birthday, handelChange }) => {
  return (
    <label className={s.label}>
      Date
      <input
        className={s.input}
        type="date"
        name="birthday"
        placeholder="Birthday"
        value={birthday}
        onChange={handelChange}
      />
    </label>
  );
};

export default Birthday;
