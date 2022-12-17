import { useState } from 'react';
import Input from './Input/Input';
import ErrorMessage from './ErrorMessanger/ErrorMessanger';
import Header from '../Header/Header';
import Button from '../Button/Button';
import TextArea from './TextArea/TextArea';
import s from './Form.module.css';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  birthday: '',
  phone: '',
  website: 'https://',
  about: '',
  skills: '',
  lastProject: '',

  nameError: '',
  surnameError: '',
  birthdayError: '',
  phoneError: '',
  websiteError: '',
  aboutError: '',
  skillsError: '',
  projectError: '',
};

const Form = ({ onSubmit }) => {
  const [data, setData] = useState(INITIAL_STATE);

  const handleChangeInput = (name, e) => {
    let value = e.target.value;

    if (name === 'phone') {
      const phoneMask = e.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

      const value = phoneMask
        .slice(1, 5)
        .filter((item) => item !== '')
        .join('-');

      setData((data) => ({ ...data, [e.target.name]: value }));
    } else {
      setData((data) => ({ ...data, [e.target.name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const state = { ...data };

    let isError = false;

    for (const [key, value] of Object.entries(state)) {
      state[key] = value.trim();
    }

    if (state.firstName === '') {
      state.nameError = 'Required field';
      isError = true;
    } else if (state.firstName.charAt(0) !== state.firstName.charAt(0).toUpperCase()) {
      state.nameError = 'Name must start with a capital letter';
      isError = true;
    } else {
      state.nameError = '';
    }

    if (state.lastName === '') {
      state.surnameError = 'Required field';
      isError = true;
    } else if (state.lastName.charAt(0) !== state.lastName.charAt(0).toUpperCase()) {
      state.surnameError = 'Name must start with a capital letter';
      isError = true;
    } else {
      state.surnameError = '';
    }

    if (state.birthday === '') {
      state.birthdayError = 'Required field';
      isError = true;
    } else {
      state.birthdayError = '';
    }

    if (state.phone === '') {
      state.phoneError = 'Required field';
      isError = true;
    } else if (!state.phone.match(/\d-\d{4}-\d{2}-\d{2}/g)) {
      state.phoneError = 'The phone must be in the format X-XXXX-XX-XX';
      isError = true;
    } else {
      state.phoneError = '';
    }

    if (state.website === '') {
      state.websiteError = 'Required field';
      isError = true;
    } else if (!state.website.match('https?://.+')) {
      state.websiteError = 'The site must start with http://... or https://...';
      isError = true;
    } else {
      state.websiteError = '';
    }

    if (state.about === '') {
      state.aboutError = 'Required field';
      isError = true;
    } else if (state.about.length > 600) {
      state.aboutError = 'Max length: 600';
      isError = true;
    } else {
      state.aboutError = '';
    }

    if (state.skills === '') {
      state.skillsError = 'Required field';
      isError = true;
    } else if (state.skills.length > 600) {
      state.skillsError = 'Max length: 600';
      isError = true;
    } else {
      state.skillsError = '';
    }

    if (state.lastProject === '') {
      state.projectError = 'Required field';
      isError = true;
    } else if (state.lastProject.length > 600) {
      state.projectError = 'Max length: 600';
      isError = true;
    } else {
      state.projectError = '';
    }

    if (isError) {
      setData(state);
    } else {
      let { firstName, lastName, birthday, phone, website, about, skills, lastProject } = state;

      onSubmit({
        firstName,
        lastName,
        birthday,
        phone,
        website,
        about,
        skills,
        lastProject,
      });
    }
  };

  const reset = () => {
    setData({ ...INITIAL_STATE });
  };

  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <div className={s.contentWrap}>
          <Header text="Create a questionnaire" />
        </div>
      </div>

      <form className={s.form}>
        <Input
          label="Name"
          name="firstName"
          value={data.firstName}
          placeholder="Example: Yevhenii"
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.nameError} />

        <Input
          label="Last Name"
          name="lastName"
          value={data.lastName}
          placeholder="Example: Peredrii"
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.surnameError} />

        <Input
          label="Birthday"
          type="date"
          name="birthday"
          value={data.birthday}
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.birthdayError} />

        <Input
          label="Phone"
          type="tel"
          name="phone"
          value={data.phone}
          placeholder="Example: X-XXXX-XX-XX"
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.phoneError} />

        <Input
          label="Website"
          name="website"
          value={data.website}
          placeholder="Example: http://website.com"
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.websiteError} />

        <TextArea
          label="About"
          name="about"
          value={data.about}
          rows={7}
          placeholder="Write a little about yourself..."
          maxLength={600}
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.aboutError} />

        <TextArea
          label="Skills"
          name="skills"
          value={data.skills}
          rows={7}
          placeholder="List the stack of technologies you own..."
          maxLength={600}
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.skillsError} />

        <TextArea
          label="Last the project"
          name="lastProject"
          value={data.lastProject}
          rows={7}
          placeholder="Describe your latest project..."
          maxLength={600}
          onChange={handleChangeInput}
        />
        <ErrorMessage error={data.projectError} />

        <div className={s.buttonWrapper}>
          <Button text="Cancel" type="button" onClick={reset} />
          <Button text="Save" type="button" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
