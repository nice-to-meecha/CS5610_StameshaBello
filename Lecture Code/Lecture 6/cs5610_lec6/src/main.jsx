import React from 'react'
import ReactDOM from 'react-dom/client'
// If there is no file extension in import, then .jsx file or
// package from node_modules
import Dice from './Dice'

/*
  Want to start here for any React projects
*/

/*
  Functional Component
    - Components written as a function
      - Return statement is the element
*/

// Taking all React code and setting it onto root element.
// Do NOT need to change this code
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dice />
  </React.StrictMode>,
)
