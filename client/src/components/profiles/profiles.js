import React, { Component } from 'react'
import './profiles.css';

class Profiles extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
    }
  }
  componentDidMount(){
    if(localStorage.getItem('email')){
      this.setState({email: localStorage.getItem('email')})
    }
  }
  render(){
    return (
      <div className="profiles">
          <p>My email is: {this.state.email}</p>
      </div>
    );
  }
}

export default Profiles;