import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import Pokemon from './Pokemon'
import PokemonDetails from './PokemonDetails';
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokemon />
  }, {
    path: '/pokemon/:pokemonId',
    element: <PokemonDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
