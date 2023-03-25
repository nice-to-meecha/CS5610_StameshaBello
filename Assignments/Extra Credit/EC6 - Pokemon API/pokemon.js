const express = require('express')
const router = express.Router();

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
        color: "yellow",
        health: 150,
    },
]

// request.body should include name, color and health

router.post('/', function(request, response) {
    const newPokemon = request.body;

    if(!newPokemon.color || !newPokemon.name || !newPokemon.health) {
        return response.status(422).send("Missing argument to create new pokemon");
    }

    pokemonDb.push(newPokemon);

    response.status(200).send("Pokemon " + newPokemon.name + " was created successfully");
})

// http://localhost:8000/api/pokemon/pikachu
/*

    request.params = {
        name: pikachu
    }

*/
router.get('/:name', function(request, response) {
    const pokemonName = request.params.name;

    for(let i = 0; i < pokemonDb.length; i++) {
        const pokemon = pokemonDb[i];
        if (pokemon.name === pokemonName) {
            return response.send(pokemon);
        }
    }

    response.status(404).send("No pokemon with name " + pokemonName + " found.")

})

//http://localhost:8000/api/pokemon/find?color=yellow&size=large
/*
    req.query = {
        color: 'yellow',
        size: 'large',
    }
*/
router.get('/find', function(req, res) {
    const color = req.query.color;

    if(!color) {
        return res.send(pokemonDb);
    }

    const output = [];

    for(let pokemon of pokemonDb) {
        if(pokemon.color === color) {
            output.push(pokemon)
        }
    }

    res.send(output)

})

// http://localhost:8000 + /api/pokemon + /
router.get('/pikachu', function(req, res) {
    res.send("This is the pikachu")
})

router.get('/', function(req, res) {
    res.send("This is the the base pokemon route")
})

router.post('/', function(req, res) {
    res.send("This is how you'll create new pokemon")
})


////////////////// EC6 - PUT/DELETE //////////////////
/*
    Name: Stamesha Bello
    Date: 3/24/2023
*/

router.put('/', function(req, res) {
    // Checking if pokemon exists, based on name
    const { name } = req.body;
    const updateIndex = pokemonDb.findIndex(pokemon => pokemon.name === name);
    if (updateIndex > -1) {
        pokemonDb[updateIndex] = {
            ...pokemonDb[updateIndex],
            // This will override any existing values of the same property
            ...req.body,
        }
        res.send(`${name} has been updated to ${JSON.stringify(pokemonDb[updateIndex])}`);
    } else {
        res.status(404).send(`No pokemon with the name of ${name} currently exists in the database.`)
    }
})

router.delete('/', function(req, res) {
    // Checking if pokemon exists, based on name
    const { name } = req.body;
    const deleteIndex = pokemonDb.findIndex(pokemon => pokemon.name === name);
    if (deleteIndex > -1) {
        pokemonDb.splice(deleteIndex, 1);
        res.send(`${name} was deleted from the database.`)
    } else {
        res.status(404).send(`No pokemon with the name of ${name} currently exists in the database.`)
    }
})

module.exports = router;