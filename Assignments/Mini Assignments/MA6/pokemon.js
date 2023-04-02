const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

// replace this string with your full name
const name = "Stamesha Bello"

console.log(`My name is ${name}`)

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [{
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58", name: "Pikachu", health: 10, level: 1
}];

router.get('/', function(req, res) {
    // return all pokemon
    res.status(200).send(myPokemon);
});

router.post('/', (req, res) => {
    const newPokemon = req.body;

    // if the pokemon name already exists in the list, return an error
    const existingPokemon = myPokemon.find(pokemon => pokemon.name === newPokemon.name);
    if (existingPokemon) {
        return res.status(404).send(`${newPokemon.name} already exists in the (temporary) "database".`);

    } else if(!newPokemon.name) {
        return res.status(404).send("You can't add a pokemon without a name!");
    }

    // randomly generate an id using UUID ["uuid()"]
    newPokemon.id = uuid();

    // randomly generate a level between 1 and 10, inclusive, if none is given
    if (!newPokemon.level) {
        newPokemon.level = randomNumber(1, 10);
    }
    // randomly generate a health between 10 and 100, inclusive, if none is given
    if (!newPokemon.health) {
        newPokemon.health = randomNumber(10, 100);
    }

    // insert your pokemon into the myPokemon list
    myPokemon.push(newPokemon);

    // return a 200
    res.status(200).send(`${JSON.stringify(newPokemon)} was successfully created.`);
});

router.get('/:pokemonId', function (req, res) {
    const { pokemonId } = req.params;
    // return pokemon if one is found matching the pokemonId
    const existingPokemon = myPokemon.find(pokemon => pokemon.id === pokemonId);
    if (existingPokemon) {
        res.status(200).send(existingPokemon);

    } else {
        // return a 404 if no pokemon matches that pokemonId
        res.status(404).send(`No pokemon with id ${pokemonId} exists.`);
    }
});

router.put('/:pokemonId', function(req, res) {
    const { pokemonId } = req.params;
    const updatedPokemon = req.body;

    // update the pokemon matching the pokemonId
    // based on the req body
    const existingPokemonIndex = myPokemon.findIndex(pokemon => pokemon.id === pokemonId);
    if (existingPokemonIndex > -1) {
        myPokemon[existingPokemonIndex] = {
            ...myPokemon[existingPokemonIndex],
            ...updatedPokemon,
        }
        res.status(200).send(`Pokemon with id ${pokemonId} is now ${JSON.stringify(myPokemon[existingPokemonIndex])}.`);

    } else {
        // return a 404 if no pokemon matches that pokemonId  
        res.status(404).send(`No pokemon with id ${pokemonId} exists.`);
    }
})

router.delete('/:pokemonId', function(req, res) {
    const { pokemonId } = req.params;

    // delete pokemon if pokemonId matches the id of one
    const existingPokemonIndex = myPokemon.findIndex(pokemon => pokemon.id === pokemonId);
    if (existingPokemonIndex > -1) {
        myPokemon.splice(existingPokemonIndex, 1);
    }

    // return 200 even if no pokemon matches that Id
    res.status(200).send(`Pokemon with id ${pokemonId} was deleted.`);
})

function randomNumber(start = 1, end = 100) {
    return Math.round(Math.random() * (end - start)) + start;
}

module.exports = router;