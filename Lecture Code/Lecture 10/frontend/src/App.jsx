import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

//https://dog.ceo/api/breeds/image/random
function App() {
  const [dogImage, setDogImage] = useState("");

  async function generateDog() {
    // All browsers make GET requests
    // Promise is a chain of functions that can apply afterward
    // axios.get("https://dog.ceo/api/breeds/image/random")
    //   .then((response) => {
    //     setDogImage(response?.data?.message)
    //   })

    console.log("Hello from line 19");
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log("Hello from line 21");
    setDogImage(response?.data?.message);
    console.log("Hello from line 23");
  }

  return(<div>
    <div>
      Hello, click to generate a dog
    </div>
    <button
      onClick={generateDog}
    >
      Generate
    </button>
    {/* {dogImage && <img src={dogImage} />} */}
    {dogImage ? <img src={dogImage} /> : null}
  </div>)

  // const [dogImage, setDogImage] = useState("")

  // function getDogImageAsPromise() {
  //   console.log("Hello from line 12");
  //   const response = axios.get("https://dog.ceo/api/breeds/image/random")
  //     // .then() takes callback function with response argument, giving
  //     // you data (response) of call
  //     .then(function(response) {
  //       setDogImage(response?.data?.message);
  //       console.log("Hello from line 17");
  //     })

  //   // While waiting for a response, will call any code outside of promise
  //   // If have APIs that depend on one another, may need to nest those calls
  //   console.log("Hello from line 22");
  // }

  // async/await is syntactic sugar; makes async code
  // less complex
  // async function getDogImageAsAsyncAwait() {
  //   const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  //   setDogImage(response?.data?.message);
  // }

  // return (<div>
  //   <div>
  //     Hello from my dog picture app
  //   </div>
  //   <button
  //     onClick={getDogImageAsPromise}
  //   >
  //     Click here to get a dog image
  //   </button>
  //   {dogImage && <img src={dogImage} />}
  // </div>)
}

export default App
