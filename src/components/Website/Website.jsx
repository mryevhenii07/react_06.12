import React from 'react';
import s from './Website.module.css';

const Website = ({ handelChange, website }) => {
  return (
    <label className={s.label}>
      Website
      <input
        className={s.input}
        type="text"
        name="website"
        placeholder="website"
        value={website}
        onChange={handelChange}
      />
    </label>
  );
};

export default Website;
