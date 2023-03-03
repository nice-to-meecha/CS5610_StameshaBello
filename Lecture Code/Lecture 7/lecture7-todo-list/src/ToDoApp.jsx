import React, { useState, useContext } from 'react';
import ToDoList from './ToDoList';
import { toDoContext } from './ToDoContext';

function ToDoApp() {
    const toDoStateObject = useContext(toDoContext);
    const { toDoListState, setToDoListState } = toDoStateObject;

    const [inputState, setInputState] = useState("");

    function onToDoInput(event) {
        const inputValue = event.target.value
        setInputState(inputValue);
    }

    function onButtonPress() {
        toDoListState.push(inputState);
        // MUST make copy of array when setting state values
        setToDoListState([...toDoItemsState]);
        setInputState('');
    }


    return (
        <div>
            <ToDoList toDoList={toDoListState} />
            <input
                value={inputState}
                onInput={onToDoInput}
            />
            <button onClick={onButtonPress}>
                Add Item
            </button>
        </div>
    );
}

export default ToDoApp;