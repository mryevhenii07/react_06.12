import { PureComponent } from 'react';
import FirstName from '../FirstName/FirstName';
import LastName from '../LastName/LastName';
import Birthday from '../Birthday/Birthday';
import Phone from '../Phone/Phone';
import Website from '../Website/Website';
import About from '../About/About';
import Skills from '../Skills/Skills';
import DescriptionLastProject from '../DescriptionLastProject/DescriptionLastProject';
import Cancel from '../Cancel/Cancel';
import Save from '../Save/Save';
import s from './Form.module.css';

class Form extends PureComponent {
  state = {
    firstName: '',
    lastName: '',
    birthday: '',
    phone: '',
    website: '',
    about: '',
    skills: '',
    lastProject: '',
  };

  handelChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { firstName, lastName, birthday, phone, website, about, skills, lastProject } =
      this.state;
    const { handelChange } = this;

    return (
      <form className={s.form}>
        <h1>Creating a questionnaire </h1>

        <FirstName firstName={firstName} handelChange={handelChange} />
        <LastName lastName={lastName} handelChange={handelChange} />
        <Birthday birthday={birthday} handelChange={handelChange} />
        <Phone phone={phone} handelChange={handelChange} />
        <Website websites={website} handelChange={handelChange} />
        <About about={about} handelChange={handelChange} />
        <Skills skills={skills} handelChange={handelChange} />
        <DescriptionLastProject lastProject={lastProject} handelChange={handelChange} />

        <div className={s.wrapBtn}>
          <Cancel />
          <Save />
        </div>
      </form>
    );
  }
}

export default Form;
