import React from 'react';
import s from './Skills.module.css';

const Skills = ({ skills, handelChange }) => {
  return (
    <label>
      <textarea
        name="skills"
        value={skills}
        onChange={handelChange}
        className={s.textarea}
        rows="7"
        placeholder="Skills"></textarea>
    </label>
  );
};

export default Skills;
