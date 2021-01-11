import React, { useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    
    
    const [text, setText] = useState('')

    const onChange = (e) => 
        setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault()
        if (text === ""){ 
            alertContext.setAlert("Please fill the input field!", "light")
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
                { githubContext.users.length > 0 && <input type="button" value="Clear" className="btn btn-block" onClick={githubContext.clearUsers}/> }
            </div>
        )
    
}


export default Search
