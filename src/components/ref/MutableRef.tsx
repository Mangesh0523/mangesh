import {useState,useRef, useEffect} from 'react'

export const DomRef=()=>{
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef<number | null>(null)

    const stopTimer=()=>{
        if(intervalRef.current)window.clearInterval(intervalRef.current)
        
    }
    useEffect(()=>{
        intervalRef.current=window.setInterval(()=>{
            setTimer((timer)=>timer +1)
        },1000)
        return()=>{
            stopTimer()
        }
    },[])
    return(
        <div>
            HookTmier- {timer} -
            <button onClick={()=>stopTimer()}>Stop Timer</button>
        </div>
    )
}

// to manage mutableref with useref hook . above code is just for timer component.
//  const [timer,setTimer]=useState(0) to keep track number of second.
// const intervalRef=useRef(null) within create a ref. and store in  const intervalRef.

// to increase the vlue of timer by one second with the setInterval(()=> function
// useEffect(()=>{
//     intervalRef.current=window.setInterval(()=>{
//         setTimer((timer)=>timer +1)
//     },1000)
//     return()=>{
//         stopTimer()
//     }

// the return value is store in intervalRef.current so we are mutating the retun value.

// const intervalRef=useRef<number | null>(null) used (undefine) to fix error
