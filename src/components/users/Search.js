import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {
    
    state = {
        text: ""
    }

    PropTypes = {
        findUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }

    onChange = (e) => 
        this.setState({ [e.target.name]: e.target.value})

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.text === ""){ // to verify 
            this.props.setAlert("Please fill the input field!", "light")
        }else{
            this.props.findUser(this.state.text)
            this.setState({text: ""})
        }

    }

    
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}> 
                    <input type="text" name="text" placeholder="Search user here ..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                { this.props.usersNotEmpty() && <input type="button" value="Clear" className="btn btn-block" onClick={this.props.clearUsers}/> }
            </div>
        )
    }
}

export default Search
