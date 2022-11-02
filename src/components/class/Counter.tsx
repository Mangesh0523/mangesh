
import {Component } from  'react';


type CounterProps={
    message:string,
}

type CounterState={
    count:number,
}



// the count value is 5
export class Counter extends Component<CounterProps, CounterState>{
    state= {
        count:0,
    }
    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count +1}))
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increase</button>
                {this.props.message}{this.state.count}
            </div>
        )
    }
}

// after writing the code we get two error for count and property to resolve it we have to describe type in code:

// type CounterProps={
//     message:string,
// }

// type CounterState={
//     count:number,
// }

//step two: we need two connet this type with class component:the way we do that afer the Component keyword
//<CounterProps, CounterState>