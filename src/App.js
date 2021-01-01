//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './components/navbar/Navbar'
import Users from './components/users/Users'


class App extends Component{
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({loading: true})
    const res = await axios.get("https://api.github.com/users")
    this.setState({users: res.data,loding: false})
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }

}

export default App;
