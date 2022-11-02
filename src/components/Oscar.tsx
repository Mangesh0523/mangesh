import React from 'react';
type OscarProps={
    children:React.ReactNode
}

export const Oscar=(props:OscarProps)=>{
    return(
        <div>
            {/* Oscar goes to Amitabh Bacchan */}
            {props.children}
        </div>
    )
}