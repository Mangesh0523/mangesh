import React from "react"

type ButtonProps={
    handleClick: ()=>void
}

export const Button=(props:ButtonProps)=>{
    return(
        <button onClick={props.handleClick}>Click</button>
    )
}

//another way to show by event

// type ButtonProps={
//     handleClick: (event:React.MouseEvent<HTMLButtonElement>)=>void
//     handleClick: (event:React.MouseEvent<HTMLButtonElement>, id= number)=>void  // for adding id on event
// }
// export const Button=(props:ButtonProps)=>{
//     return(
//         <button onClick={props.handleClick}>Click</button>
//     )
// }

// export const Button=(props:ButtonProps)=>{
//     return(
//         <button onClick={event=>props.handleClick(event,1)}>Click</button>  // for id pass 1
//     )
// }


// in App.tsx
{/* <Button handleClick={(event)=>{
console.log('Button Clicked', event)
      }}/> */}


      // in App.tsx
{/* <Button handleClick={(event, id)=>{
console.log('Button Clicked', event, id)
      }}/> */}  // for id



