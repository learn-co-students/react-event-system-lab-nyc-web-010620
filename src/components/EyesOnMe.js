// Code EyesOnMe Component Here
import React from "react"

class EyesOnMe extends React.Component{
    constructor(){
        super()
    }

    whenFocused = () => console.log("Good!")
    whenBlur = () => console.log("Hey! Eyes on me!")

    render(){
        return(
            <button onFocus={this.whenFocused} onBlur={this.whenBlur}>Hi</button>
        )
    }


}


export default EyesOnMe