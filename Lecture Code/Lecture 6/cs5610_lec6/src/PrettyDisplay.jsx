import React from "react";
import "./PrettyDisplay.css";

// Takes any attributes passed to component and used as an object
function PrettyDisplay(props) {
    return (<div className="pretty-display">{props.numberValue}
        {props.ending}</div>);
}

export default PrettyDisplay;