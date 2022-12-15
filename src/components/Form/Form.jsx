import { PureComponent } from 'react';
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

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  handleChangeInput = (name, e) => {
    let value = e.target.value;

    if (name === 'phone') {
      const phoneMask = e.target.value
        .replace(/\D/g, '')
        .match(/(\d{0,1})(\d{0,4})(\d{0,2})(\d{0,2})/);

      const value = phoneMask
        .slice(1, 5)
        .filter((item) => item !== '')
        .join('-');

      this.setState({ [e.target.name]: value });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const state = { ...this.state };

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
      this.setState(state);
    } else {
      let { firstName, lastName, birthday, phone, website, about, skills, lastProject } = state;

      this.props.onSubmit({
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

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.wrap}>
          <div className={s.contentWrap}>
            <Header text="Create a questionnaire" />
            {/* <img src={rocket} className={s.image} alt="rocket" /> */}
          </div>
        </div>

        <form className={s.form}>
          <Input
            label="Name"
            name="firstName"
            value={this.state.firstName}
            placeholder="Example: Yevhenii  "
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.nameError} />

          <Input
            label="Last Name"
            name="lastName"
            value={this.state.lastName}
            placeholder="Example: Peredrii"
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.surnameError} />

          <Input
            label="Birthday"
            type="date"
            name="birthday"
            value={this.state.birthday}
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.birthdayError} />

          <Input
            label="Phone"
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder="Example: X-XXXX-XX-XX"
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.phoneError} />

          <Input
            label="Website"
            name="website"
            value={this.state.website}
            placeholder="Example: http://website.com"
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.websiteError} />

          <TextArea
            label="About"
            name="about"
            value={this.state.about}
            rows={7}
            placeholder="Write a little about yourself..."
            maxLength={600}
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.aboutError} />

          <TextArea
            label="Skills"
            name="skills"
            value={this.state.skills}
            rows={7}
            placeholder="List the stack of technologies you own..."
            maxLength={600}
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.skillsError} />

          <TextArea
            label="Last the project"
            name="lastProject"
            value={this.state.lastProject}
            rows={7}
            placeholder="Describe your latest project..."
            maxLength={600}
            onChange={this.handleChangeInput}
          />
          <ErrorMessage error={this.state.projectError} />

          <div className={s.buttonWrapper}>
            <Button text="Отменить" type="button" onClick={this.reset} />
            <Button text="Сохранить" type="button" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
// import { PureComponent } from 'react';
// import FirstName from '../FirstName/FirstName';
// import LastName from '../LastName/LastName';
// import Birthday from '../Birthday/Birthday';
// import Phone from '../Phone/Phone';
// import Website from '../Website/Website';
// import About from '../About/About';
// import Skills from '../Skills/Skills';
// import DescriptionLastProject from '../DescriptionLastProject/DescriptionLastProject';
// import Cancel from '../Cancel/Cancel';
// import Save from '../Save/Save';
// import s from './Form.module.css';

// class Form extends PureComponent {
//   state = {
//     firstName: '',
//     lastName: '',
//     birthday: '',
//     phone: '',
//     website: 'https://',
//     about: '',
//     skills: '',
//     lastProject: '',
//     // errorLength: 'ww',

//     nameError: '',
//   };

//   handleChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSave = (e) => {
//     e.preventDefault();
//     this.props.formSafeHandler(this.state);
//     const state = { ...this.state };

//     let isError = false;

//     for (const [key, value] of Object.entries(state)) {
//       state[key] = value.trim();
//     }

//     if (state.name === '') {
//       state.nameError = 'Поле обязательное для заполнения';
//       isError = true;
//     } else if (state.name.charAt(0) !== state.name.charAt(0).toUpperCase()) {
//       state.nameError = 'Имя должно начинаться с большой буквы';
//       isError = true;
//     } else {
//       state.nameError = '';
//     }

//     // if (this.state.firstName === '') {
//     //   this.setState({ errorLength: 'The field is empty!' });
//     //   console.log(this.state.errorLength);
//     //   console.log(this.state.firstName);
//     //   // this.setState((prevState) => ({ errorLength: prevState.errorLength }));
//     // }
//     // setTimeout(() => {
//     //   console.log(this.state.errorLength);
//     // }, 1000);
//   };

//   reset = () => {
//     this.setState({
//       firstName: '',
//       lastName: '',
//       birthday: '',
//       phone: '',
//       website: 'https://',
//       about: '',
//       skills: '',
//       lastProject: '',
//     });
//   };
//   render() {
//     const {
//       firstName,
//       lastName,
//       birthday,
//       phone,
//       website,
//       about,
//       skills,
//       lastProject,
//       // errorLength,
//       nameError,
//     } = this.state;

//     const { handleChange, handleSave, reset } = this;

//     return (
//       <form className={s.form} onSubmit={handleSave}>
//         <h1>Creating a questionnaire </h1>

//         <FirstName
//           firstName={firstName}
//           handelChange={handleChange}
//           // errorLength={errorLength}
//           nameError={nameError}
//         />
//         <LastName lastName={lastName} handelChange={handleChange} />
//         <Birthday birthday={birthday} handelChange={handleChange} />
//         <Phone phone={phone} handelChange={handleChange} />
//         <Website website={website} handelChange={handleChange} />
//         <About about={about} handelChange={handleChange} />
//         <Skills skills={skills} handelChange={handleChange} />
//         <DescriptionLastProject lastProject={lastProject} handelChange={handleChange} />

//         <div className={s.wrapBtn}>
//           <Cancel reset={reset} />
//           <Save />
//         </div>
//       </form>
//     );
//   }
// }

// export default Form;
