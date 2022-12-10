import React from 'react';
import s from './About.module.css';

const About = ({ about, handelChange }) => {
  return (
    <label>
      <textarea
        onChange={handelChange}
        name="about"
        value={about}
        className={s.textarea}
        rows="7"
        placeholder="About Me"></textarea>
    </label>
  );
};

export default About;
