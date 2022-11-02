type GreetProps={ 
    name:string;
   
    messageCount?:number;
    islogedIn:boolean;
}

export const Greet=(props:GreetProps)=>{
    return(
        <div>
<h2>
        {
            props.islogedIn 
            ?`welcome ${props.name }! their are ${props.messageCount} unread msg` 
            : 'welcome Guest'
             }
           </h2>
        
        </div>
    )
}