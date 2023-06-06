// Add any package imports here
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';



// Component for the Game page
function Game() {

    // Declare State Variables here e.g. :
    const [counter, setCounter] = useState(1);



    // Code your functions here e.g. :
    const handleClick = () => {
        setCounter(counter + 1)
        console.log(`Hello! You have clicked me ${counter} times. `)
    };



    // In this return function is the code that displays what will be outputted to the webpage
    return (
        <>
            <Button onClick={handleClick}>Click me!</Button>
        </>
    )
}

export default Game;