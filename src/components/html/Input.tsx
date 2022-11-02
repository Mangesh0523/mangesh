import React from 'react'

type InputProps=React.ComponentProps<'input'>

export const CoustomInput=(props:InputProps )=>{
    return(
        <input{...props} />
    )
}


