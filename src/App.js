import { PureComponent } from 'react';
import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  birthday: '',
  phone: '',
  website: 'https://',
  about: '',
  skills: '',
  lastProject: '',
  submitted: false,
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }
  handleAddData = (newData) => {
    this.setState({ ...newData, submitted: true });
  };

  render() {
    const { submitted, ...data } = this.state;

    return (
      <Container>
        {!submitted && <Form onSubmit={this.handleAddData} />}
        {submitted && <Profile data={data} />}
      </Container>
    );
  }
}

export default App;
