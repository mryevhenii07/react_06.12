import React, { Component } from 'react';
import Header from '../Header/Header';
import s from './Profile.module.css';

class Profile extends Component {
  render() {
    const { firstName, lastName, birthday, phone, website, about, skills, lastProject } =
      this.props.data;

    return (
      <div className={s.wrap}>
        <Header text={`${firstName} ${lastName}`} />
        <table>
          <tbody>
            <tr>
              <td className={s.left}>Birthday</td>
              <td className={s.right}>{birthday}</td>
            </tr>
            <tr>
              <td className={s.left}>Phone</td>
              <td className={s.right}>{phone}</td>
            </tr>
            <tr>
              <td className={s.left}>Website</td>
              <td className={s.right}>{website}</td>
            </tr>
            <tr>
              <td className={s.left}>About</td>
              <td className={s.right}>{about}</td>
            </tr>
            <tr>
              <td className={s.left}>Skills</td>
              <td className={s.right}>{skills}</td>
            </tr>
            <tr>
              <td className={s.left}>Last the Project</td>
              <td className={s.right}>{lastProject}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
