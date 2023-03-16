import React from "react";
import IndividualCity from "./IndividualCity";

// Recommended to put .jsx files in React folder

// React standard to name function same as file name

/*
    React manages virtual DOM
        - Figures out what parts of app need to be updated and managed
          automatically
*/
function CitySelectorApp() {

    const cities = [
        "Tokyo",
        "Paris",
        "Seattle",
        "Vancouver",
        "Brussels",
        "New York",
    ];

    const cityComponents = cities.map(
        (city, i) => (<IndividualCity city={city} key={i}/>)
    );

    // Must add HTML in parentheses
    // React does NOT like it when you return multiple elements;
        // must return everything within one overarching element
        // (e.g. parent <div>)
    return (<div>
        {cityComponents}
    </div>);
}

export default CitySelectorApp;