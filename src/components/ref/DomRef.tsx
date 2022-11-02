

import {useRef, useEffect} from 'react'

export const DomRef=()=>{
const InputRef= useRef<HTMLInputElement>(null!)

useEffect(()=>{
    InputRef.current.focus()
}, [])
return(
    <div>
        <input type='text' ref={InputRef}/>
    </div>
)
}



//  when you knows that your value is not null then use(null!) assertion type of not null this allow us focus without optional changing InputRef.current?.focus()

//  InputRef.current.focus() for focus the input