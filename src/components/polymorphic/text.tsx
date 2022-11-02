import React from "react"

type TextProps={
    size?:'sm' | 'md' | 'lg'
    color?:'primary' | 'secondary'
    children:React.ReactNode
    as?:React.ElementType
}


export const Text=({size,color,children,as}:TextProps)=>{
    const Component= as || 'div'
return
// {/* <div className='class-with-${size}-${color}'>{children}</div> */}
<Component className='class-with-${size}-${color}'>{children}</Component> 
}


// example of ppolymorpic 
//the above code will work with one problem
// if you have a one reusable component to render eigher heading or paragraph ({children}) or label the under line html element remain same ie a div tag.
// this is not good for simantic
// we can pass another props which controls what html element render in the browser for eg 'as=h1', 'as=pg' as=lable
// we want text component to behave  like diffrent html element based on this 'as' props such a component called as polymorpic component

//we will see how to type a polymorpic component

//-fist step is we need a as props   as?:string it will fix error in app.tsx
// now we have to distrcture it and we can use it insted of div tag

// export const Text=({size,color,children,as}:TextProps)=>{
//     const Component= as || 'div' -- 'div' this defaulting is because as is optional type

//* <Component className='class-with-${size}-${color}'>{children}</Component>  */ insted of div we can use component it will complete our first step
// we have get error at Component to remove that we have to use  as?:React.ElementType

 // after removing the erro r go to app.tsx then remove the eqaual to befor app insert it agan and open comma takel it will give suggestion