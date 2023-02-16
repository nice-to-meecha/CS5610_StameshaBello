// 'var' used to declare a variable
// Problems with 'var', so don't use anymore
// var banana = "banana";

// Now we use 'const' and 'let'
// const - Used for constants that don't change value
const banana = "banana";

/* If you try changing the value of a 'const' value, will
// give an error
// banana = "apple";
*/

// On other hand, 'let' used for variables that can
// be reassigned later
let banana2 = "banana1";
banana2 = "banana3";

console.log("let banana2:", banana2)

if (banana === "banana") {
    var apple = "apple";
}

// This SHOULD throw an error, since it's out of scope.
// HOWEVER, 'var' creates global variables. Can easily,
// accidentally overwrite variable values
console.log(apple);

/*
    7 Primitive Types
        - Boolean: true/false
        - null: null value (empty pointer)
        - undefined: have variable but haven't defined it yet
        - Number: both integer and floating point
        - BigInt: used for huge numbers with arbitrary precision
        - String
            - 2 ways to define string
                - double quotes: "apple"
                - single quotes: 'apple'
            - Both are considered valid and equivalent
        - Symbol: value that's guaranteed to be unique
            - Kind of like a key
            - Very rare to see
        - Object
            - Like hashmap -- have key-value pairings
*/

/*
    Dynamically Typed
        - Can use various types with the same variable
*/
let var_type = "string";
var_type = 1;
console.log(var_type);

/*
    Equality and Sameness
        - Equality
            - Use triple equal signs (===)
                - Checks for equality (including type)
                    - Works like normal 
            - If use two equal signs (==), called "coercion"
                - Changes type of one of the values to match the other
*/

// Coercion
let favNum = 1
if (favNum == '1') {
    console.log("Coercion makes this true, even though comparing 1 and '1'")
}

// Equality (uses THREE equal signs)
if (favNum === '1') {
    console.log("Incorrect. Will not run.")
}

/*
    Objects
        - Most imp data type
            - Every data type in JS is an object
*/
const foodColor = {
    banana: "yellow",
    apple: "red",
    kiwi: "green",
    banana: "green", // All values unique; if use same key, will override prev val
};

console.log(foodColor.apple);
console.log(foodColor["apple"]);
console.log(foodColor["peanut"]);

// Can change/add values with assignment
foodColor.apple = "green";

// Can delete key-val pairs
delete foodColor.apple

console.log(foodColor);

const foodFacts = {
    banana: "yellow",
    apple: "red",
    kiwi: "green",
    banana: "green",
    // Can mix and match types
    numBananas: 1,
    // Can nest objects within objects
    fridgeContents: {
        milk: true,
    },
};

/*
    Arrays
        - Way of collecting multiple types together
        - Technically object, but interact with them differently
*/
const favMovies = [
    "Star Wars",
    "RRR",
    "Godfather",
];

// To access value, use index value (arrays are 0-indexed)
console.log(favMovies[1]);
favMovies.push("Saw");
console.log(favMovies);

// Can remove and still reference last value using pop
const leastFavMovie = favMovies.pop();
console.log(favMovies);
console.log(leastFavMovie);

// unshift() moves to front of queue
favMovies.unshift("Obstinate");
console.log(favMovies);

// shift() removes from front of queue
const newFav = favMovies.shift();
console.log(newFav);
console.log(favMovies);
