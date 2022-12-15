import { Component } from 'react';
import s from './ErrorMessanger.module.css';

class ErrorMessage extends Component {
  render() {
    if (this.props.error === '') {
      return null;
    }

    return <div className={s.errorMsg}>{this.props.error}</div>;
  }
}

export default ErrorMessage;
