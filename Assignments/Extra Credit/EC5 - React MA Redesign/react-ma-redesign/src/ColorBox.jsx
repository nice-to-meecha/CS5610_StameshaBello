import React, { useState } from 'react';
import './ColorBox.css'

function ColorBox() {
    const [inputColor, setInputColor] = useState('');
    
    function updateInputColor(event) {
        setInputColor(event.target.value)
    }
    
    const colorBox = document.getElementById("color-box");
    const errorMessage = document.getElementById("error-message");
    function changeColor() {
        let color, errorMessageHidden;
        switch(inputColor.toLowerCase()) {
            case "green":
            case "blue":
            case "red":
                color = inputColor.toLowerCase();
                errorMessageHidden = true;
                break;
            default:
                color = "white";
                errorMessageHidden = false;
                errorMessage.textContent = `${inputColor} is not a valid color.
                Please choose green, blue or red.`
        }

        colorBox.style.backgroundColor = color;
        errorMessage.hidden = errorMessageHidden;
    }

    return (
        <div>
            <div id='color-box'></div>
            <input
                id='color-input'
                value={inputColor}
                onInput={updateInputColor}
            />
            <button
                onClick={changeColor}
            >
                Change color
            </button>
            <div id='error-message'></div>
        </div>
    );
}

export default ColorBox;