import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users: [
            {
                id: 1,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                login: "mojombo",
                html_url: "https://github.com/mojombo"
            },
            {
                id: 2,
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                login: "defunkt",
                html_url: "https://github.com/defunkt"
            },
            {
                id: 3,
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                login: "pjhyett",
                html_url: "https://github.com/pjhyett"
            }
        ]

    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <div key={user.id}><UserItem user={user}/></div>
                ))}
            </div>
        )
    }
}

const userStyle={
    display: 'grid',
    gridTemplateColumns : 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
