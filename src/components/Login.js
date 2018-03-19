import React, { Component } from 'react'
import { IconButton, IconSpinner, textInput, handleChange } from './utils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        password: ''
      }
    }
    this.textInput = textInput.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  componentDidMount() {
    this.props.validateUser();
  }

  handleSubmit = () => {
    this.props.handleSubmit({ data: this.state.data });
  }

  handleClear = () => {
    this.props.handleClear();
  }

  render() {
    let { password } = this.state.data;
    let { errMessage, hasErred, isFetching } = this.props;

    let message = null;
    if (hasErred) {
      message = <div className='login__err-message-container'>
        <div className='login__err-message'>
          <p>{errMessage}</p>
        </div>
        <IconButton handler={this.handleClear} icon='times' />
      </div>;
    }

    let submitButton = null;
    if (isFetching) {
      submitButton = <IconSpinner />
    } else {
      submitButton = <button onClick={this.handleSubmit}>Login</button>;
    }

    return (
      <div className='login-container'>
        <div className='login'>
          {this.textInput('username')}
          <input type='password' placeholder='password' name='password' value={password} onChange={this.handleChange} />
          {message}
          <div className='login__submit'>
            {submitButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
