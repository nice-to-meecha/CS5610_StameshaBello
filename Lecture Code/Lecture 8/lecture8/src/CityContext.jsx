import React, { createContext, useState } from "react";

export const CityData = createContext();

function CityContext(props) {
    const [selectedCity, setSelectedCity] = useState('');

    const cityData = {
        selectedCity,
        setSelectedCity,
    }

    // Any child component of Provider is able to access
    // its value withOUT using props
    return (
        <CityData.Provider value={cityData}>
            {/* Any HTML passed in between the CityData.provider tags */}
            {props.children}
        </CityData.Provider>
    )
}

export default CityContext;