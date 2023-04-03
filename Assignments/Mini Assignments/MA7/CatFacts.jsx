import { useState } from 'react';
import axios from 'axios';
import CatLogo from './assets/cat.svg'
import './CatFacts.css';

// Name: Stamesha Bello

function CatFacts() {

    // you may need to add other code elsewhere!
    const [catFact, setCatFact] = useState("Loading...");

    function generateCatFact() {
        setCatFact("Loading...");

        axios.get('https://catfact.ninja/fact')
            .then(response => {
                // insert code here
                setCatFact(response?.data?.fact);
            })
            .catch(err => {
                console.error(err);
                setCatFact("There was an error while retrieving a cat fact.");
            });
    }



  return (
    <div className="App">
        <div className='catFactsText'>
            {catFact}
        </div>
        <div>
            <button onClick={generateCatFact} className="catFactBtn">
                Click me for a cat fact!
            </button>
        </div>
        <div>
            <img src={CatLogo} className="catFactImg" />
        </div>
    </div>
  )
}

export default CatFacts
