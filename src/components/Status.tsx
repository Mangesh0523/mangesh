import React from 'react';

type StatusProps={
    status:`Loading` | `success` | `error`
}

export const Status=(props:StatusProps )=>{

    let message
    if(props.status==="Loading"){
        message="Loading..."

    }else if(props.status==="success"){
        message="Data feached successfully!"

    }else if(props.status==="error"){
    message="error feaching data!"
}
    return(
        <div>
            {/* <h2>Loading...</h2>
            <h2> Data feached successfully!</h2>
            <h2>error feaching data</h2> */}
            <h2>Status - {message}</h2>
        </div>
    )
}

// task to render conditonally one of this status depending on prop that we pass..