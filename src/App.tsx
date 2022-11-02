import React from 'react';
import './App.css';
import  {Greet} from './components/Greet'
import  { Person } from './components/Person'
import  { PersonList } from './components/PersonList'
import  { Status } from './components/Status'
import {Heading }from './components/Heading'
import {Oscar }from './components/Oscar'
import {Button }from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { LoggedIn } from './components/state/LoggedIn'
// import { User } from './components/state/User'
import { Counter } from './components/state/Counter'
import {ThemeContextProvider} from "./components/context/ThemeContext"
import {Box} from './components/context/Box'
import {User} from './components/context/User'
import { UserContextProvider} from './components/context/UserContext'
import { DomRef } from './components/ref/DomRef'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { RandomNumber } from './components/restriction/RandomNumber'
// import {Counter } from './components/class/Counter'
// import {List} from './components/generics/List'
import { Toast } from './components/templateliterals/toast'
import { CustomButton } from './components/html/Button'
import {Text } from './components/polymorphic/text'


function App() {
  const PersonName={
  first:"Raghav",
last:"shastri",
  }

  const nameList=[
    {
      first:"Radhe",
    last:"Govind",
      },
      {
        first:"Niket",
      last:"Jadhav",
        },
        {
          first:"Ashish",
        last:"Kamble",
          },
  ]
  return (
    <div className="App">
      <Greet name="Mangesh" messageCount={20} islogedIn={false}/>
      <Person name={PersonName} />
      <PersonList names= {nameList}/>
      < Status status='error'/>  
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar goes to Amitabh Bacchan</Heading>
      </Oscar>
      <Greet name="Mangesh"  islogedIn={false}/>
      <Button handleClick={()=>{
console.log('Button Clicked')
      }}/>
      <Input value='' HandleChange={(event)=>console.log(event)}/>
      <Container styles={{border:'2px solid black', padding:'1rem' }}/>
      <LoggedIn />
      {/* <User /> */}
      <Counter />
      <ThemeContextProvider> <Box /> </ThemeContextProvider>
     <UserContextProvider> <User/> </UserContextProvider>
     <DomRef />
     {/* <Counter message="the count value is"/> */}
     <Private islogedIn={true} component={Profile} />
     {/* <List items={['Ajay','Vijay','Sujay'] } onClick={(item)=>console.log(item)}/>
     <List items={[1,2,3] } onClick={(item)=>console.log(item)}/>  
     <List items={[
      {
        first:'Mangesh',
        last:'Bhaganagare',
       },
       {
        first:'Ajay',
        last:'Kadam',
       },
       {
        first:'Akash',
        last:'Mehkarkar',
       },
     ] }
      onClick={(item)=>console.log(item)}/> */}
      <RandomNumber value={10} isPossitive />
<Toast position='center' />
<CustomButton variant='secondary' onClick={()=>console.log('Clicked')} >Secondary Button</CustomButton>
<Text as='h1' size='lg'>Heading</Text>
<Text  as='p' size='md'>Paragrapg</Text>
<Text as='label' size='sm' color='primary'>Label</Text>
    </div>
  );
}

export default App;


//< Status />  as we didnt specifies the prop then it will invoked a error as status is missing abouve we specified the status 
// now it work fine however we have a issue that it will handle the status of loading, success or error also It will accept any string type for eg ABCD
//to fix this we have to use union of string literal as the status type


// input and button is for onclick and onchange handler.

// Container is for style.

// greet component with ? mark is  for optional.
// status container is for conditional rendering using union type.
// personlist or object or array.
// heading and oscar is  eg for children props can be pass to react component