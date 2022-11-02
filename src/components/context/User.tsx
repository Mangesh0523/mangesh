import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User=()=>{
    const userContext=useContext (UserContext)
    const handleLogin=( )=>{
        if(userContext){
            userContext.setUser({
            name:"Mangesh",
            email:"mangesh@gmail.com"
        })
    }
}
    const handleLogOut=( )=>{
        if(userContext){
            userContext.setUser(null)
            
        }
    
    }
return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <div>User name is{userContext?.user?.name}</div>
        <div>User email is {userContext?.user?.email}</div>
    </div>
)
}

// <div>User name is{userContext.user?.name}</div>
// <div>User email is {userContext.user?.email}</div> - export const UserContext=createContext({} as userContext type ) this will allow use to null check against the user context