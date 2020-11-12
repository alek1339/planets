import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css';

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.onLogout = this.onLogout.bind(this)
  }

  onLogout(){
    this.props.handleLogout();
  }

  render() {
    const authLinks = (
      <Link className='navbar-brand' to='/login'>
            Login
          </Link>
    )
    const guestLinks  = (
      <Link className='navbar-brand' to='/login' onClick={this.onLogout}>
            Logout
       </Link>
    )
    return (
      <nav className='navbar navbar-expand-sm navbar-dark nav mb-4'>
        <div className='container'>
         <Link className='navbar-brand' to='/'>
            Home
          </Link>
          {!this.props.isLogged ? authLinks : guestLinks}
          <Link className='navbar-brand' to='/planets'>
            Planets
          </Link>
          <Link className='navbar-brand' to='/profile'>
            Profile
          </Link>
          {
            this.props.isAdmin ? 
            <Link className='navbar-brand' to='/administrator'>
               Administrator
             </Link> : ''
          }
          
        </div>
      </nav>
    )
  }
}

export default Navbar
