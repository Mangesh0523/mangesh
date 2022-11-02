

type ListProps<T>={
    // type ListProps={
    // items:string[] | number[]
    items:T[] 
    // onClick:(value:string | number)=>void]
    onClick:(value:T )=>void
}

// export const List=({items, onClick}:ListProps)=>{
    export const List=<T extends {} >({items, onClick}:ListProps<T>)=>{

    return(
        <div>
            <h2>List Of Items</h2>
            {items.map((item, index)=>{
                return(
                    <div key={index} onClick={()=>onClick(item)}>
                        {/* {item} */}
                    </div>
                )
            })}
        </div>
    )
}

//export const List=<T extends {id: number} >({items, onClick}:ListProps<T>)=>{

// <div key={index.id} onClick={()=>onClick(item)}> 
// go to app.tsx and add id: 1,2,3 for each obj and remove the top two const in APP.TSX 

//generics help us in code duplication when we have to handle multiple types to be handle and at same time provide strict type checking