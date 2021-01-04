//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/Alert/Alert'


class App extends Component{
  state = {
    users: [],
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
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={this.state.alert}/>
          <Search findUser={this.findUser} clearUsers={this.clearUsers} usersNotEmpty={this.usersNotEmpty} setAlert={this.setAlert}/>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

}

export default App;
