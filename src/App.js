//import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/Alert/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About/About'
import User from './components/users/User'
import GithubState from './context/github/GithubState'


const App = () => {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


    const findUser = async (username) => {
    setLoading(true)
    const res =  await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    setUsers(res.data.items)
    setLoading(false)

    
  } 

  const getUser = async (username) => {
    setLoading(true)
    const res =  await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    setUser(res.data)
    setLoading(false)
  } 
  

  const getUserRepos = async (username) => {
    setLoading(true)
    const res =  await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    setRepos(res.data)
    setLoading(false)           
  } 

  const clearUsers = () => {  
    setUsers([])
    // we do not need to call to the following function
    setLoading(false)
  }

  const usersNotEmpty = () => {
    return users.length > 0
  }

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
                    <Search findUser={findUser} clearUsers={clearUsers} usersNotEmpty={usersNotEmpty} setAlert={showAlert}/>
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
                />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render={ props => (
                  <Fragment>
                    <User {...props} getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos} repos={repos} />
                  </Fragment>
                )}
                />
              </Switch>
            </div>
          </div>
        </Router> 
      </GithubState>
     
    )
}

export default App;
