import React, { Component } from 'react'

export class UserItem extends Component {
    state = {
        id: 1,
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        login: "mojombo",
        html_url: "https://github.com/mojombo"
    }
    render() {
        const {avatar_url, login, html_url } = this.state // distruction
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
