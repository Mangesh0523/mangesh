import React from 'react';

type ContainerProps={
styles:React.CSSProperties
}


export const Container=(props:ContainerProps )=>{
    return(
        // <div style={{border:'1px solid black', padding:'1rem' }}>
        <div style={props.styles}>
            text contain goes here
            </div>
    )
}