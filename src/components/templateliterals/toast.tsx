// positon prop can be of the following_
// 'left-center' | 'left-top' | "left-bottom"  | "center" | "center-top"| "center-bottom"
// | "right-center" | "right-bottom" | "right-top"


type HorizantalPosition= 'left' | 'center' | 'right'
type VarticalPosition= 'top' | 'center' | 'bottom'

type ToastProps={
    position: Exclude<`${HorizantalPosition}-${VarticalPosition}`,'center-center' > | 'center'
}

export const Toast=({position}:ToastProps)=>{
    return(
        <div>Toast Notification Position- {position}</div>
    )
}


// we are seeing how to restrict  the position .
// above component suppose to be toast notification . a simple component which accept a single prop (position) and when you send in the browser
// if you see the library riact.hottoast for ex. a toast notification pop up the notification on any area of the screen  for eg .'left-center' | 'left-top' | "left-bottom"  | "center" | "center-top"| "center-bottom"
// for every single possition we have  to mention hard code that will work instead of this we have a way which is called as template literal.
// now we are using template literal to combine HorizantalPosition and VarticalPosition now let creat a ne wtype for toast with const toastProps
// now if you try to assign the component in app.ts it will show all the possible value which are assign in component.
// but we have also a problem position can be "center-center" but most prefarable is just "center" for that we have to use Exclude and angle bracket
// position: Exclude<`${HorizantalPosition}-${VarticalPosition}`,'center-center' > | 'center' like this you have to mantion the type in union as center only.