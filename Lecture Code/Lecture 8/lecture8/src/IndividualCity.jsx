import React, { useState, useContext } from "react";
import "./IndividualCity.css"
import { CityData } from "./CityContext";

// React functions ONLY take one argument (optionally) -- props
// Pass in key-value pairs to props via attributes
// Props take all attributes of component and wrap them into
    // a single object

/* 
    When open React app, will run all active functions once.
    It will not re-run them again, unless something triggers
    that. A change in state will trigger a re-run.
*/
function IndividualCity(props) {

    const { city } = props;
    const cityDataObj = useContext(CityData);
    const { selectedCity, setSelectedCity } = cityDataObj;

    // State = any data that lives ONLY in the component, itself
    // Hooks: way of storing and interacting with component, 
        // in certain situations
        // State lets us store information in the app and update it
    let [isSelected, setIsSelected] = useState(false);
    // Changing value of variable in state, causes entire component
        // function to be re-run
    // State lets you store local data in component
    function handleOnClick(event) {
        // setIsSelected(!isSelected);
        setSelectedCity(props.city);
    }

    const className = city === selectedCity ? "individualCity selected" : "individualCity";
    
    return (
        <div
            className={className}
            onClick={handleOnClick}
        >
            { city }
        </div>
    )
}

export default IndividualCity;