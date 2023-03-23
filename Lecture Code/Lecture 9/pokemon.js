const express = require('express');
const router = express.Router();

// What if want to gather all pokemon of certain color?
// Can use query params to define what you're looking for
// Can access query params by using req.query
const pokemonDb = [
    {
        name: "pikachu",
        color: "yellow",
        health: 100,
    },
    {
        name: "charizard",
        color: "red",
        health: 200,
    },
    {
        name: "squirtle",
        color: "blue",
        health: 125,
    },
    {
        name: "snorlax",
        color: "blue",
        health: 520,
    },
]

router.get('/', function (req, res) {
    res.send("This is the base pokemon route");
})

/*
    http://localhost:8000/api/pokemon/pikachu

    req.params = {
        name: pikachu
    }
*/
router.get('/:name', function(req, res) {
    // Name is a variable
    const pokemonName = req.params.name
    const pokemon = pokemonDb.find(pokemon => pokemon.name === pokemonName)
    pokemon
        ? res.send(pokemon)
        : res.status(404).send(`No pokemon with name ${pokemonName} found.`);
})

router.get('/pikachu', function(req, res) {
    res.send("This is the Pikachu route");
})

/* http://localhost:8000/api/pokemon/find?color=blue&size=large

    req.query = {
        color: 'yellow',
        size: 'large',
    }
*/
router.get('/find', function (req, res) {
    const color = req.query.color;
    if (!color) {
        res.send(pokemonDb);
        // return doesn't return data to user. Just ends
        // call of function. Must use res.send() to return
        // data to user
    }

    const output = pokemonDb.filter(pokemon => pokemon.color === color);

    // Content-Type is now application/json
    // JSON is JavaScript Object Notation, though it's language-agnostic
    // (can be used with any language; not just JavaScript)
    res.send(output);
})

router.post('/', function(req, res) {
    // Need to make sure req has content-type "application/json",
    // otherwise won't be able to process as an object
    
    const newPokemon = req.body;

    if (!newPokemon.name || !newPokemon.color || !newPokemon.health) {
        res.status(422).send("Need all pokemon properties!");
    } else {
        pokemonDb.push(newPokemon);
        res.status(200).send(`Pokemon ${newPokemon.name} was created`);
    }
})

router.post('/', function(req, res) {
    res.send("This is how you'll create a new pokemon");
})

module.exports = router;
