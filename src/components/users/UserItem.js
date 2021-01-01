import React, { Component } from 'react'

export class UserItem extends Component {
    render() {
        const {avatar_url, login, html_url } = this.props.user // distruction
        return (
            <div className="card text-center">                
                <img className="round-img" src={avatar_url} alt="" style={{width: "60px"}} />
                <h1>{login}</h1>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                </div>
            </div>
        )
    }
}

export default UserItem
