import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import CitySelectorApp from './CitySelectorApp'
import CityContext from './CityContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CityContext>
  <React.StrictMode>
    <CitySelectorApp />
    {/* <App /> */}
  </React.StrictMode>
  </CityContext>,
)

// Props passed from parent to child
// State is data that's on the component, itself
// Context - Information you want accessible to the entire app


// main.jsx is the entry point of the app
// StrictMode is Reacts way of handling errors correctly
  // Makes it easier to understand errors and
  // elicit warnings to catch them
// React - component-based view (functional)
  // Functions return what you are seeing on the screen
/*
  main
    -- ToDoApp
      -- ToDoList
    --CitySelectorApp
*/