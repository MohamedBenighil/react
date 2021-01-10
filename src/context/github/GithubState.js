import React, {useReducer} from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {
   SEARCH_USERS,
   SET_LOADING,  
   CLEAR_USERS,
   GET_USER,
   GET_REPOS
} from '../types'

// create initial state
const GithubState = props => {
    const initialState = {
        users: [],
        user:{},
        repos: [],
        loading: false
    }

    // this GithubState will include all of our actions 
    // once we call action, then we get result, then we dispatch a type (the vars inside types.js) to our reducer
    const [state, dispatch ] = useReducer(githubReducer, initialState)

    //Search Users

    //Get user

    //Get Repos 

    //Clear Users

    //Set loading
 
    // the goal is to make the state available to the entire App:   
    return <githubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
    }}>
    {/*because wa wrap the entire App inside Provider */}
    {props.children}
    </githubContext.Provider> 
}

export default GithubState