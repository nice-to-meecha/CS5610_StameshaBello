import React, { useState, useContext } from 'react';
import './ToDoList.css';
import { toDoContext } from './ToDoContext';

function ToDoList(props) {
    for (let i = 0; i < 2; i++) {
        console.log("I have been run");
    }

    /* 
        useState()
            - Returns (1) value and (2) way to update value
            - State - any data that is stored/tracked by
              a component
              - To use a state, must call the hook useState()
              - Maintains data across multiple runnings of this function
                - When click button again, you'll rerun the ToDoList() function.
                  However, the toDoItemsState values will KEEP updated values the
                  same, since they are being maintained across runnings of default function.
                    - Data persists across re-renders
                - Looking at the toDoItems array (the one withOUT state) will start
                  afresh. It will restart from its initial value.
    */
    const toDoItems = [
        "Do Homework",
        "Take Nap",
    ];

    const { toDoList } = props
    const toDoStateObject = useContext(toDoContext);
    const { toDoListState, setToDoListState } = toDoStateObject;

    // Can add HTML from anywhere, not just in return statement
    const toDoListComponents = [];
    for (let i = 0, itemLength = toDoList.length; i < itemLength; i++) {
        function removeFromToDoList() {
            toDoListState.splice(i, 1);
            console.log("After splicing", toDoListState)
            setToDoListState([...toDoListState]);
        }
        const toDoListComponent = (
            <div className='ToDoRow'>
                <input
                    type='checkbox'
                    onClick={removeFromToDoList}
                />
                <div>{toDoList[i]}</div>
            </div>
        )
        toDoListComponents.push(toDoListComponent)
    }

    function updateFirstToDoItem() {
        // Even if update value within a function,
        // the returned value (within parentheses down below)
        // will remain the same, because it's static HTML.
        
        // Need to ask React to refresh/re-render the component,
        // when change the variable.
        // The hook needed for this is "state"
        
        // console.log(toDoItemsState);
        console.log("Items State BEFORE", toDoItemsState);
        toDoItemsState[0] = "Do Project 2";
        setToDoItemsState([...toDoItemsState]);
        console.log("Items State AFTER", toDoItemsState);

        console.log("Items BEFORE", toDoItems);
        toDoItems[0] = "Do Project 2";
        console.log("Items AFTER", toDoItems);
    }

    // To indicate HTML, use parentheses
    // To access code from within parentheses,
    //  use curly braces {}

    return (
        <div>
            {toDoListComponents}
            {/*
                Do NOT add event listener with JS code. Bad practice for React.
                Instead, add functions using attributes like onClick
            */}
        </div>
    );
}

export default ToDoList;

let banana = "banana";
function returnBanana() {
    return banana;
}
const returnedValue = returnBanana();

banana = "apple";

// Expect this to be 'banana', because it was returned
// from the returnBanana() function, PRIOR to changing
// the value of the variable
console.log(returnedValue);

const ambikaFavMovies = ["Marvel Movies", "Spy Movies", "Nerd Movies"];
const [firstFav, secondFav] = ambikaFavMovies;
console.log(firstFav);
console.log(secondFav);