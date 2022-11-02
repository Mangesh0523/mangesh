import React from 'react';
type InputProps={
    value:string;
    HandleChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}


export const Input=(props: InputProps)=>{
    return(
       <input type="text" value={props.value} onChange={props.HandleChange}/>
    )
}

// define handler into the component ( it does not matter to define handlechange as props or pass ito the component)


// export const Input=(props: InputProps)=>{
//     const HandleInputChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
//         console.log(event)
//     }
//     return(
//        <input type="text" value={props.value} onChange={HandleInputChange}/>
//     )
// }