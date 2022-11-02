import React from 'react'
import { Greet } from '../Greet'

export const CostomComponent = (props: React.ComponentProps<typeof Greet> ) => {
  return (
    <div>{props.messageCount}</div>
  )
}


// bye this way we can able to extract te props type from one component (greet) and use them as props type for another component.
// in this case from Greet component to costom component.

//extracting the component with greet