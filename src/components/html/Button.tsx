import React from 'react'

type ButtonProps={
    variant:'primary' | 'secondary'
    children:string
// } & React.ComponentProps<'button'>
}& Omit<React.ComponentProps<'button'>,'children'>


export const CustomButton=({variant, children,...rest}: ButtonProps )=>{
    return(
        <button className={'class with-${variant}'}{...rest}>{children}</button>
    )
}

// we have to pass a prop that will affect how the button will style.

// type ButtonProps={
//     variant:'primary' | 'secondary'
// }

//variant:'primary' | 'secondary' distructure this variable from props. export const CustomButton=({variant}: ButtonProps )=>{

// in App.tsx we cant write <CustomButton variant='primary' >Primary Button</CustomButton> because  it shold be Lable
// <CustomButton variant='primary' onClick={()=>console.log('Clicked')} >Primary Button</CustomButton> ypescript through a error for this also.
// to fix this error we need to spesify button props to inclue the html button props in addition to our special props (varient)
// & React.ComponentProps<'button'> button is specified for generic type now we have to distrcture children and ...rest

// as follow: <button className={'class with-${variant}'}{...rest}>{children}</button>


// one more important ts featue  to rap html element is omit keyward.
// Omit: omit takes an object type and remove the spesified properties.
// <div>Secondary Button</div> it will be work in App.tsx

//in button props we have to spesify childern:string
// now it will show the children type as intersection of string and  React.ReactNode not that we want now we have to tell ts to leave out the children type from the html button type
// and for that we use omit keyward now if you haver  on children it will show as string type only 
// now it will show error in <CustomButton variant='secondary' onClick={()=>console.log('Clicked')} ><div>Secondary Button</div></CustomButton>
// change it to the simple string by removing the <div> tag and now error will be gone.