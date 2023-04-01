const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon.schema.js').PokemonSchema;

const PokemonModel = mongoose.model("PokemonModel", PokemonSchema);

function createPokemon(pokemon) {
    return PokemonModel.create(pokemon);
}

// When use find methods, must use .exec() (execute)
// method afterward
function returnAllPokemon() {
    return PokemonModel.find().exec();
}

function getPokemonById(id) {
    return PokemonModel.findById(id).exec();
}

module.exports = {
    createPokemon,
    returnAllPokemon,
    getPokemonById,
}