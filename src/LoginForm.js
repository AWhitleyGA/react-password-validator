import React, { Component } from 'react';
import './App.css';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      emailIsValid: null,
      password: '',
      confirmPassword: '',
      passwordIsValid: null,
      alert: ''
    }
  }

  setEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  setPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  confirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }
  checkEmail(email) {
    return email.includes('@')
  }
  checkPasswords(password, confirmPassword) {
    if(password !== confirmPassword) {
      this.setState({
        alert: 'passwords must match'
      })
      return false
    } else if (password.length < 8) {
      this.setState({
        alert: 'password must be at least 8 characters'
      })
      return false
    } else if (password.search(/[A-Z]/) < 0) {
      this.setState({
        alert: 'password must contain a capital letter'
      })
      return false
    } else if(password.search(/[0-9]/) < 0) {
      this.setState({
        alert: 'password must contain a number'
      })
      return false
    } else {
      this.setState({
        alert: ''
      })
      return true
    }
  }
  checkFields() {
    console.log(this.checkEmail(this.state.email))
    console.log(this.checkPasswords(this.state.password, this.state.confirmPassword))
  }

  render() {
    return (
      <div className="sign-up-form">
      <h2>Sign-Up!</h2>
      <p><span>Email: </span><input type="text" onChange={e => this.setEmail(e)}/></p>
      <p><span>Password: </span><input type="password" onChange={e => this.setPassword(e)}/></p>
      <p><span>Confirm Password: </span><input type="password" onChange={e => this.confirmPassword(e)}/></p>
      <p><button onClick={() => this.checkFields()}>Submit</button></p>
      <p className="alert">{this.state.alert}</p>
      <p><span>Your password must: </span></p>
      <ul>
        <li> Be at least 8 characters in length </li>
        <li> Contain at least one uppercase letter and one number </li>
      </ul>
      </div>
    );
  }
}

export default LoginForm;
