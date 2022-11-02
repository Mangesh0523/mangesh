
import { useState } from 'react'
type AuthUser={
    name:string,
    email:string,
}
export const User=()=>{
const [user, setUser]=useState<null | AuthUser >(null)
const handleLoggin=()=>{
    setUser({
        name:'test',
        email:'test@gmail.com',
    })
}
const handleLoggout=()=>{
    setUser(null)
}
return(
    <div>
       <button onClick={handleLoggin}>Login</button>
            <button onClick={handleLoggout}>Logout</button>
            <div>User Name is{user?.name}</div>
            <div>User email is{user?.email}</div>
    </div>
)

}

// when user visit our website then it is not loggedin by default in that case intialise case with null

// also we have to intialise the state null when user logged out

// let define the logged in handler when user click on logged in we have to send name and email propertys . Name and email send by user but now in case we set a default in Loggedin

// after passing the argument object in handleLoggin ts gives error because we cant pass string value to the null. so we have to define explicitly type of useState hook.

// bind the user name and email in div { } as we type User it suggest for name and email when we select this we got optional chaining with ? 
// example the useState hook with future value and the initial value


// useState type Assertion _



// let suppose in useState hook you cant loged out remove it from the code.:
//const handleLoggout=()=>{
//     setUser(null)
// }
//<button onClick={handleLoggout}>Logout</button>
// so in this type you have to use type Assertion so typescript knows user type is always AuthUser not to be null. 
//for type assertion we use as keyword as bellow:
//const [user, setUser]=useState< AuthUser >({} as AuthUser) now it will allow as to access name and email without the check. so the user.name and user.email without the optionchange we can use.
