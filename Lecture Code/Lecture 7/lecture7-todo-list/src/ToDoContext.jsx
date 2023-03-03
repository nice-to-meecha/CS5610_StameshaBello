import React, { createContext, useState } from "react";

export const toDoContext = createContext();
// Context creates global variables that can be used
// between parent and child
// Context allows us to pass data anywhere in app
//      - Creating outer component that wraps around data

/*
    <custom-component>
        <div>Banana</div>
    </custom-component>

    function customComponent(props) {
        props.children // (div.children)
    }
*/
export function ToDoProvider(props) {
    const [toDoListState, setToDoListState] = useState(
        [
            "Do Homework",
            "Take Nap",
            "Eat Dinner",
        ],
    )

    const stateObject = {
        toDoListState,
        setToDoListState,
    }

    return (
        <toDoContext.Provider value={stateObject}>
            {props.children}
        </toDoContext.Provider>
    )
}

