// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
    entering = (event) => {
        console.log("Entering password...")
    }

    render() {

        return(
            <form>
            <input type="password" onKeyUp={ this.entering }/>
            
            </form>
        )
    }
};

export default Keypad;