import React from 'react';
import s from './DescriptionLastProject.module.css';

const DescriptionLastProject = ({ lastProject, handelChange }) => {
  return (
    <label>
      <textarea
        name="lastProject"
        value={lastProject}
        className={s.textarea}
        onChange={handelChange}
        rows="7"
        placeholder="Description of the last project"></textarea>
    </label>
  );
};

export default DescriptionLastProject;
