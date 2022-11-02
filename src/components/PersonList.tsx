// import {name} from './Person.types'

type PersonListProps={
names:{
    first:string,
    last:string,

    // names:name[]  - extracting prom Person .types.ts file and used here
} []     // it is an object of an array
}
    export const PersonList=( props:PersonListProps)=>{
        return(
            <div>
                {/* <h2>Radhe Govnid</h2>
                <h2>Niket Jadhav</h2>
                <h2> Ashish Kamble</h2> */}

                {props.names.map(name=>{
                    return(
                        <h2 key={name.first}>{name.first} {name.last}</h2>
                    )
                })}
            </div>
        )
    } 