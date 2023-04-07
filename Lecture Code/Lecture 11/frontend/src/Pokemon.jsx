import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Pokemon() {

    const [pokemon, setPokemon] = useState([]);
    const [pokemonInput, setPokemonInput] = useState({
        name: "random",
        health: 100,
        level: 5,
    })

    async function getAllPokemon() {
        // CORS error
        // Cross Origin R...
        // Should not get request from different domains (we're in localhost:5173
        // and trying to get response from localhost:5173)
        const response = await axios.get("/api/pokemon/");
        console.log(response);
        setPokemon(response.data);
    }

    const components = []
    pokemon.forEach(poke => {
        components.push((<div><Link to={`/pokemon/${poke._id}`}>{poke.name}</Link> - {poke.color} - {poke.health}</div>))
    })

    function setPokemonName(event) {
        const name = event.target.value;
        setPokemonInput({
            ...pokemonInput,
            name: name,
        })
    }

    function setPokemonColor(event) {
        const color = event.target.value;
        setPokemonInput({
            ...pokemonInput,
            color: color,
        })
    }

    function setPokemonHealth(event) {
        const health = event.target.value;
        setPokemonInput({
            ...pokemonInput,
            health: health,
        })
    }

    async function createNewPokemon() {
        await axios.post("/api/pokemon/", pokemonInput);
        setPokemonInput({
            name: '',
            color: '',
            health: '',
        })

        await getAllPokemon();
    }
    

    return (
        <div>
            <div>{components}</div>
            <div>Show dem pokemon</div>
            {/* {pokemon} */}
            <button onClick={getAllPokemon}>Click here to fetch pokemon</button>
            <div>
                Name: <input value={pokemonInput.name} onInput={setPokemonName}/>
                Color: <input value={pokemonInput.color} onInput={setPokemonColor}/>
                Health: <input value={pokemonInput.health} onInput={setPokemonHealth}/>
                <button onClick={createNewPokemon}>Create New Pokemon</button>
            </div>
            <div>{pokemonInput.name}</div>
        </div>
    );
}