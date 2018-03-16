import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.data);
  }

  handleClear = () => {
    this.props.handleClear();
  }

  render() {
    let { username, password } = this.state.data;
    let { errMessage, hasErred, isFetching } = this.props;

    let message = null;
    if (hasErred) {
      message = <div className='login__err-message-container'>
        <div className='login__err-message'>
          <p>{errMessage}</p>
        </div>
        <button onClick={this.handleClear}>
          <i className='fa fa-times'></i>
        </button>
      </div>;
    }

    let submitButton = null;
    if (isFetching) {
      submitButton = <div><i className="fa fa-circle-o-notch fa-spin"></i></div>;
    } else {
      submitButton = <button onClick={this.handleSubmit}>Login</button>;
    }

    return (
      <div className='login-container'>
        <div className='login'>
          <input type='text' placeholder='username' name='username' value={username} onChange={this.handleChange} />
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
