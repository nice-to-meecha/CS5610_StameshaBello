import React, { useState } from "react";
import PrettyDisplay from "./PrettyDisplay";

function Dice() {
    // If want to access JS code from HTML component,
    // use curly braces
    let num1 = useState(7);

    // Need a mechanism within React, such that will tell browser
    // to refresh it.
        // Otherwise, HTML is set, and cannot be changed after initially loading
    // state allows data to persist within React
        // state is known as a hook
    function handleClick() {
        num1++;
    }

    // Can add event functions DIRECTLY to components themselves

    // ALWAYS wrap HTML in parentheses
    return (<div onClick={handleClick}>Hello, I'm a Dice component. My value is
        <PrettyDisplay numberValue={num1} ending="!" />.</div>);
}

/*
    "default" keyword

    If importing from this file -- but NOT specifying an
    existing function within curly braces -- will export the
    function defined next to "default"
*/
export default Dice;