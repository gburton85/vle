import React from 'react'

export default class Login extends React.Component {
  render() {
    return (
      <div className='login'>
        <input type='text' ref='username' className="form-control" placeholder='Username'/>
        <input type='password' ref='password' className="form-control" placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          Login
        </button>
      </div>
    );
  }

  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }
}


Login.propTypes = {
  onLoginClick: React.PropTypes.func.isRequired
}
