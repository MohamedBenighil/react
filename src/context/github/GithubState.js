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


const GithubState = props => {
    // create initial state
    const initialState = {
        users: [],
        user:{},
        repos: [],
        loading: false
    }

    // once we call action, then we get result, then we dispatch a type (the vars inside types.js) to our reducer
    const [state, dispatch ] = useReducer(githubReducer, initialState)

    //Search Users
    const findUser = async (username) => {
        setLoading()
        const res =  await axios.get(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
      } 
    //Get User
    const getUser = async (username) => {
        setLoading()
        const res =  await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        })
      } 

    //Get Repos 
    const getUserRepos = async (username) => {
        setLoading()
        const res =  await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
        //setRepos(res.data)
        //setLoading(false)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })     
      } 
    

    //Clear Users
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS})  
      }

    //Set loading
    const setLoading = () =>{
        dispatch({type: SET_LOADING})
    }
 
    // the goal is to make the state available to the entire App:   
    return <githubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        findUser,
        clearUsers,
        getUser,
        setLoading,
        getUserRepos


    }}>
    {/*because we wrap the entire App inside Provider */}
    {props.children}
    </githubContext.Provider> 
}

export default GithubState