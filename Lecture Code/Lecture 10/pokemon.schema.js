const Schema = require('mongoose').Schema

// Schema(arg1, arg2)
// arg1 - schema (what data will look like)
// arg2 - collection (table where data is stored)
exports.PokemonSchema = new Schema({
    name: String,
    health: Number,
    color: {
        type: String,
        default: "green",
    }
}, { collection: 'myPokemon'});

// Once we have schema, connect that to model
// Model is ORM (object relational module), which
// connects Node code to MongoDB