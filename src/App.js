import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar'
import Alert from './components/Alert/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About/About'
import User from './components/users/User'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'

const App = () => {

    return (
      <GithubState>
        <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login'  component={User} />
                <Route component={Notfound}/>
              </Switch>
            </div>
          </div>
        </Router> 
        </AlertState>
      </GithubState>
    )
}

export default App;

