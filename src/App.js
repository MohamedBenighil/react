//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'


class App extends Component{
  state = {
    users: [],
    loading: false
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
    console.log(res.data.items)
  } 

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search findUser={this.findUser} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

}

export default App;
