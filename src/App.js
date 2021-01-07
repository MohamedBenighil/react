//import logo from './logo.svg';
import './App.css';
import React, { Component, Fragment } from 'react';
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/Alert/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/About/About'
import User from './components/users/User'


class App extends Component{
  state = {
    user:{},
    users: [],
    repos: [],
    loading: false,
    alert: null
  }

//  async componentDidMount(){
//    this.setState({loading: true})
//    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
//    this.setState({users: res.data,loading: false})
//  }

    findUser = async (username) => {
    //console.log(username)
    this.setState({loading: true})
    const res =  await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({users: res.data.items, loading: false})             
    //console.log(res.data.items)
  } 

  getUser = async (username) => {
    this.setState({loading: true})
    const res =  await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({user: res.data, loading: false})           
  } 
  

  getUserRepos = async (username) => {
    this.setState({loading: true})
    const res =  await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    this.setState({repos: res.data, loading: false})
    console.log()           
  } 

  clearUsers = () => {  
    this.setState({users: [], loading: false})
  }

  usersNotEmpty = () => {
    return this.state.users.length > 0
  }

  setAlert = (msg, type) => {
      this.setState({alert: {msg, type}});
      setTimeout(()=> {
        this.setState({alert: null})
      },3000)
  };

  render(){
    return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={ props => (
              <Fragment>
                <Search findUser={this.findUser} clearUsers={this.clearUsers} usersNotEmpty={this.usersNotEmpty} setAlert={this.setAlert}/>
                <Users loading={this.state.loading} users={this.state.users} />
              </Fragment>
            )}
            />
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={ props => (
              <Fragment>
                <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} getUserRepos={this.getUserRepos} repos={this.state.repos} />
              </Fragment>
            )}
            />
          </Switch>
        </div>
      </div>
    </Router>  
    )
  }
}

export default App;
