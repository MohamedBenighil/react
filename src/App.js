import './App.css';
import React, { Fragment, useState } from 'react';
//import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/Alert/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About/About'
import User from './components/users/User'
import GithubState from './context/github/GithubState'


const App = () => {

  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
      setAlert({msg, type})
      setTimeout(()=> {
      setAlert(null)
      },3000)
  };

    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert alert={alert}/>
              <Switch>
                <Route exact path='/' render={ props => (
                  <Fragment>
                    <Search  setAlert={showAlert}/>
                    <Users />
                  </Fragment>
                )}
                />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login'  component={User} />
              </Switch>
            </div>
          </div>
        </Router> 
      </GithubState>
    )
}

export default App;

