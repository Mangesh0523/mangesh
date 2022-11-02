import {useReducer} from 'react';

type Counterstate={
    count:number,
} 
type Counteraction= updateAction | ResetAction
// {
//     type: `increment` | `decrement` | `reset`
//     payload?:number,
// }
type updateAction={
    type: `increment` | `decrement`
    payload:number
}
type ResetAction={
    type:  `reset`
}
const initialState ={count:0}

function reducer (state:Counterstate,action:Counteraction){
      switch(action.type){
        case'increment':
        return{count:state.count + action.payload}
        case'decrement':
        return{count:state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state
      }

      //reducer function
}
export const Counter=()=>{
   const [state, dispatch] = useReducer(reducer, initialState)
   return(
    <>
    count:{state.count}
    <button onClick={()=>dispatch ({type:'increment', payload:10})}>Increment 10
    </button>
    <button onClick={()=>dispatch ({type:'decrement', payload:10})}>Decrement 10
</button>
<button onClick={()=>dispatch ({type:'reset'})}>reset
</button>
    </>
   )
}


// although we have no error at the moment but still their is problem the action type is set to the string ie insted of increment we can pass reset and their is no error flag.
// we can use template literal instead of string as soon as we do that ts show error flag if we pass reset in button type.


//let say our counter component also have a reset function so add a reset functionalyty also add a case in case set no need of payload it simply return intialState
// add a button in dispatch to handle the reset event after creating a button it will show a error so remove the error we have to use ? to make payload optional.
// now it will show  error at action.payload we can fix it with oldschl javascript by showing || 0 butits not a good practice.
//  create a new action type where  payload:number is mandatory and only aplicable for increment and decremnt (updateAction)
// create a type reset only for reset (ResetAction) and apply in Counteraction by removing all other code it will now work.


// descriminated union




// type updateAction={
//     type: `increment` | `decrement`
//     payload:number
// }
// type ResetAction={
//     type:  `reset`
// }
// const initialState ={count:0}

// type Counteraction= updateAction | ResetAction
// {
//     type: `increment` | `decrement` | `reset`
//     payload?:number,
// }