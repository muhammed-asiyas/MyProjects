import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import './login.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMsg: '',
  }

  renderingUsernameField = () => {
    const {username} = this.state
    return (
      <div className='username-field-container'>
        <label className='label'>USERNAME</label>
        <input className='input-field' type="text" placeholder='Enter the Username' />
      </div>
    )
  }

  render() {
    return (
      <div className='app-container'>
        <form className='login-container'>
          <h1 className='login-head'>Login</h1>
          {this.renderingUsernameField()}
        </form>
      </div>
    )
  }
}

export default Login