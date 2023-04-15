const Schema = require('mongoose').Schema

// Schema(arg1, arg2)
// arg1 - schema (what data will look like)
// arg2 - collection (table where data is stored)
exports.PokemonSchema = new Schema({
    name: String,
    health: Number,
    /*
    This is equivalent to "health: Number" above.
    Above is almost like syntactic sugar
    health: {
        type: Number
    }
    */
    color: {
        type: String,
        default: "green",
    },
    // Attaching the pokemon to the user who created it
    // Just like with tweet/socialUpdate...
    username: {
        type: String,
        require: true,
    }
}, { collection: 'myPokemon'});

// Once we have schema, connect that to model
// Model is ORM (object relational module), which
// connects Node code to MongoDB