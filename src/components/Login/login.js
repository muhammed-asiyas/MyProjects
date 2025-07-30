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

  onChangeUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitFailure = errorMsg => {
    this.setState({
      showErrorMessage: true, errorMsg
    })
  }

  submitButton = async event => {
    event.preventDefault()

    const apiUrl = "https://apis.ccbp.in/login"
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails)
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.submitFailure(data.error_msg)
    }
  }

  renderingUsernameField = () => {
    const {username} = this.state
    return (
      <div className='input-field-container'>
        <label className='label'>USERNAME</label>
        <input className='input-field' type="text" placeholder='Enter the Username' value={username} onChange={this.onChangeUsername} />
      </div>
    )
  }

  renderingPasswordField = () => {
    const {password} = this.state
    console.log(password)
    return (
      <div className='input-field-container'>
        <label className='label'>PASSWORD</label>
        <input className='input-field' type="password" placeholder='Enter the Password' value={password} onChange={this.onChangePassword} />
      </div>
    )
  }

  render() {
    const {showErrorMessage, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className='app-container'>
        <form className='login-container' onSubmit={this.submitButton}>
          <h1 className='login-head'>Login</h1>
          {this.renderingUsernameField()}
          {this.renderingPasswordField()}
          <button type="submit" className='login-btn'>
            Login
          </button>
          {showErrorMessage && <p className='error-msg'>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login