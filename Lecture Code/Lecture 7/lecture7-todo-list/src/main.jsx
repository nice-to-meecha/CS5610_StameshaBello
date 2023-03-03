import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoApp from "./ToDoApp";
import { ToDoProvider } from "./ToDoContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToDoProvider>
    <React.StrictMode>
      <ToDoApp />
    </React.StrictMode>
  </ToDoProvider>
)

// main is root of app
// Takes React components and executes their functions
