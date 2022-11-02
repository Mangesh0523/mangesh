import { useState, createContext } from 'react'

export type AuthUser={
name:string,
email:string,
}
type UserContexType={
user: AuthUser | null
setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type  UserContextProviderProps={
    children:React.ReactNode
}
export const UserContext=createContext<UserContexType | null>(null)


export const UserContextProvider=({children}: UserContextProviderProps)=>{
 const [user, setUser] = useState<AuthUser | null>(null)
 return <UserContext.Provider value={{user,setUser}}>
    {children}
 </UserContext.Provider>
}

// export const UserContext=createContext({} as userContext type ) this will allow use to null check against the user context

// context always created out side the component and the future values  always be  set inside the compont.