
import { Login } from "./Login"
import {ProfileProp} from './Profile'


type PrivateProps={
    islogedIn:boolean,
    component: React.ComponentType<ProfileProp>
}
export const Private=({islogedIn,component: Component}:PrivateProps )=>{
if(islogedIn){
    return <Component name='Mangesh' />}else{
return<Login />
    }
}