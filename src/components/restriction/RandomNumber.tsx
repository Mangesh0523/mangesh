type RandomNumberType={
    value:number
}
type PositiveNumber=RandomNumberType &{
    isPossitive:Boolean
    isNegative?:never
    isZero?:never
}
type isNegative=RandomNumberType &{
    isNegative:Boolean
    isPossitive?:never
    isZero?:never
}

type isZero=RandomNumberType &{
    isZero:Boolean
    isPossitive?:never
    isNegative?:never
}
// type RandomNumberProps={
//     value:number
//     isPossitive?: Boolean
//     isNegative?: Boolean
//     isZero?: Boolean

// }
type RandomNumberProps=PositiveNumber | isNegative | isZero

export const RandomNumber=({
    value,
    isPossitive,
    isNegative,
    isZero,
}:RandomNumberProps)=>{
    return(
        <div>
            {value}{isPossitive && 'Possitive'}{isNegative && 'Negative'}{' '}
            {isZero && 'Zero'}
        </div>
    )
}

// first we have props type and their are four values like value: number, isPositive: bolean and so on which are self discraptive.
// within the component for jsx we render the value of number and based on flags we display eighter positive or negative or zero
// go to App.tsx and invoke the component

// no error occur how ever we have a room to update it.

// to restract to other values we have to create separate types in RandomNumber for postive negative and zero

// type PositiveNumber=RandomNumberType &{
//     isPossitive:Boolean
//     isNegative?:never
//     isZero?:never  --- by setting this we are showing  isNag and is Zero never been set when it is isPos.