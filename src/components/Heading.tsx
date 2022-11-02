// eg for children props can be pass to react component

import React from 'react';

type HeadingProps={
    children:string
}
export const Heading=(props: HeadingProps)=>{
// return <h2>Placeholder text</h2>  - it will show error 
return <h2>{props.children}</h2>
}