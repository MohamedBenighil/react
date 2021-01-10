import React, { useState, useContext} from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'

const Search = (props) => {
    const githubContext = useContext(GithubContext)
    
    const [text, setText] = useState('')

    const onChange = (e) => 
        setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (text === ""){ // to verify 
            props.setAlert("Please fill the input field!", "light")
        }else{
            githubContext.findUser(text)
            setText("")
        }

    }

        return (
            <div>
                <form className="form" onSubmit={onSubmit}> 
                    <input type="text" name="text" placeholder="Search user here ..." value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                { props.usersNotEmpty() && <input type="button" value="Clear" className="btn btn-block" onClick={props.clearUsers}/> }
            </div>
        )
    
}

Search.propTypes = {
    findUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
}
export default Search
