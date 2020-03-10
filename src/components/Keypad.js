// Code Keypad Component Here
import React from "react"

class Keypad extends React.Component{
    constructor(){
        super()
    }

    abstracting = () => console.log("Entering password...")

    render(){
        return(
            <input type="password" onKeyUp={this.abstracting}/>
        )
    }


}


export default Keypad