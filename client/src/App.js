import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'

import './App.css'

import Profiles from './components/profiles/profiles.js';
import Navbar from './components/layout/navbar/Navbar.js'
import Login from './components/auth/login/Login.js'
import Planets from './components/planets/Planets.js'
import Administrator from './components/admin/Administrator.js'
import Home from './components/home/Home.js'
import { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogged: false,
      isAdmin: false
    }

    this.onLogout = this.onLogout.bind(this)
  }

  onLogout(){
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    this.setState({isLogged: false, isAdmin: false})
  }

  onLogin(){
      this.setState({isLogged: true, isAdmin: localStorage.getItem('role') === 'admin'})
  }

  componentDidMount(){

    if(localStorage.getItem('email')){
      this.setState({isLogged: true})
      console.log(localStorage.getItem('email'))
    } else {
      this.setState({isLogged: false})
      console.log(localStorage.getItem('email'))
    }
  }

  render(){
    return (
      <Router>
          <div className="App">
          <header className="App-header">
              <Navbar handleLogout={this.onLogout.bind(this)} isLogged={this.state.isLogged} isAdmin={this.state.isAdmin} />
                <Switch>
                <Route exact path='/' component={Home} />
                  <Route exact path='/login'  render={(props) => (
                      <Login onLogin={this.onLogin.bind(this)} />
                    )} />
                  <Route exact path='/profile' component={Profiles} />
                  <Route exact path='/planets' component={Planets} />
                  <PrivateRoute exact path='/administrator' component={Administrator} />
                </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
