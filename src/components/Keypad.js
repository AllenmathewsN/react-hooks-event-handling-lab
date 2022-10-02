// Code Keypad Component Here
import React from "react";

function Keypad (){
    function KeypadInput(){
        console.log('Entering password...')
    }
    return  <input type="password" onChange={KeypadInput}  />
    }

export default Keypad;