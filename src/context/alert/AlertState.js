import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
   SET_ALERT,
   REMOVE_ALERT
} from '../types'


const AlertState = props => {
    // create initial state
    const initialState = null

    // once we call action, then we get result, then we dispatch a type (the vars inside types.js) to our reducer
    const [state, dispatch ] = useReducer(AlertReducer, initialState)

    // Set Alert 
    const setAlert = (msg, type) => {

        //setAlert()
        dispatch({
            type: SET_ALERT,
            payload: {msg,type} 
        })

        setTimeout(()=> {
        dispatch({type: REMOVE_ALERT})
        },3000)
    };


    // the goal is to make the state available to the entire App:   
    return <AlertContext.Provider value={{
        alert: state,
        setAlert
    }}>
    {/*because we wrap the entire App inside Provider */}
    {props.children}
    </AlertContext.Provider> 
}

export default AlertState