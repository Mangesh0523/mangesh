import {useState } from 'react'

export const LoggedIn=()=>{

    const[isLoggedIn, setisLoggedin]=useState(false)

    const handleLogin=()=>{
        setisLoggedin(true)
    }
    const handleLogout=()=>{
        setisLoggedin(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is{isLoggedIn ?'Loggeed in':'Logged out'}</div>
           
        </div>
    )
}
 // conditionally reder the attempt  when logged in render the text ,Loggeed in' else log out <div>User is{isLoggedIn ?'Loggeed in':'Logged out'}</div> 

 // without defining data type it consider it as boolean because of the feature of TS type infarance so the only boolean type can be passed as type