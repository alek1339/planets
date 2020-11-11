import React, { Component } from 'react'
import { Redirect } from 'react-router'

import axios from 'axios'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false,
      showError: true,
      error: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit (e) {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:5000/api/profiles/login', userData)
    .then(res => {
        if(res.data.email){
            localStorage.setItem('email', res.data.email)
            localStorage.setItem('role', res.data.role)
            this.props.onLogin()
            this.setState({ redirect: true, showError: false })
        } else {
            console.log(res.data)
            this.setState({ showError: true, error: res.data})
        }
        
    })
    .catch(err =>
      console.log(err)
    )
  }

  render () {
    const { redirect } = this.state;
    if (redirect) {
        return <Redirect to='/profile'/>;
      }
    return (
      <div className='container'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input className='form-control'
              type='text'
              name='email'
              placeholder='email'
              onChange={this.onChange}
              aria-describedby='emailHelp'
            />
            
            <input className='form-control' type='password' name='password' placeholder='password' onChange={this.onChange} />
                {this.state.showError ? <p className='error'>{this.state.error}</p> : ''}
            <input type='submit' />
          </div>

        </form>
      </div>
    )
  }
}


export default Login