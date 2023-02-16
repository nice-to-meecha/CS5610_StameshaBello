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


const favFoods = [];
favFoods.push("pizza");
favFoods.push("curry");

for (let i = 0; i < favFoods.length; i++) {
    console.log(favFoods[i]);
}

/*
    Function
        - 2 ways to declare functions
            1. Using keyword 'function'
            2. Assign function to variable
                - Either using function keyword
                - Or anonymous function
*/

function favFoodGenerator() {
    return "burger";
}

const favFood = favFoodGenerator();
console.log(favFood);

function excitingFoodGenerator(food, food2) {
    return food + ' and ' + food2 + "!";
}

console.log(excitingFoodGenerator("Spaghetti", "meatballs"));
// If don't provide arg, will be undefined
console.log(excitingFoodGenerator("Spaghetti"));

// Can set default values for args
function excitingFoodGenerator2(food = "Apple", food2 = "banana") {
    return food + ' and ' + food2 + "!";
}

console.log(excitingFoodGenerator2());

const questionGenerator = function(arg) {
    return arg + "?";
}

// If define with 'let', hacker can reassign function
const newQuestion = questionGenerator("Is pizza my fav food");
console.log(newQuestion);

// Adding function (questionGenerator()) to object as a key-val 
const favFunctions = {}
favFunctions.questionGenerator = questionGenerator;

const nextQuestion = favFunctions.questionGenerator("Is pizza still my favorite food?");
console.log(nextQuestion);

// Useful in situations
    // Function overloading (multiple functions with same name but different signatures)
function mathHelper(arg1, arg2, customFunction) {
    return customFunction(arg1, arg2);
}

function addition(num1, num2) {
    return num1 + num2;
}

// NOTICE: Just passing REFERENCE to addition() function;
// not making call to addition()
console.log(mathHelper(10, 15, addition))

// Why would we do this?
    // Have callback functions to deal with complex functionality
    // The function passed in will manage the response


/*
    Hoisting
        - Can call functions before being defined.
            - JS finds definitions/declarations of objects and
              quietly moves them to the top of the page in way
              that returns true most successfully
        - Though, canNOT do this with function assigned to
          variables. Those are NOT hoisted properly
              example()  <--- Throws error, since called before assignment; not hoisted
              ...
            - e.g. const example = addition(num1, num2) {...}
*/

/*
    Template Literal
        - Can use javascript code within string, to produce string easily
        - Must surround template with tildes (~)
        - e.g. `This is ${jsInsert} and ${secondInsert}!`
*/
const fruit = "banana";
const fruitColor = "yellow";
const annoyingSentence = "A " + fruit + " is " + fruitColor + '.';
console.log(annoyingSentence);
const coolerSentence = `A ${fruit} is ${fruitColor}.`;
console.log(coolerSentence);

/*
    truthy/falsy
        - Falsy
            - When declare but do not define variable, it is undefined
                - e.g. let banana;
            - Falsy examples
                - false
                - undefined
                - null
                - 0
                - Nan
                - "" (empty string)
            - Falsy values considered to be false, when evaluated in
              Boolean conditional
        - Truthy
            - Everything else not listed above is considered true
              in Boolean conditional
*/

let fruit2;
// if (fruit2 === undefined) {
//     fruit2 = "Banana!";
// }

if (!fruit2) {
    fruit2 = "Banana!";
}
console.log(fruit2);

if ("") {
    console.log("Shouldn't print");
} else {
    console.log("Empty strings ('') are NOT truthy; they are falsy.")
}

switch(fruit) {
    case "kiwi":
        console.log("The fruit is a kiwi");
        break;
    case "strawberry":
        console.log("The fruit is a strawberry");
        break;
    case "banana":
        console.log("The fruit is a banana");
        break;
    default:
        console.log("Unknown fruit");
}

/*
    for...in
        Can iterate over keys in objects using for...in
        NOT to be used with arrays, sets, etc.
*/
const favFruits = {
    apple: true,
    banana: true,
    kiwi: true,
};

for (let key in favFruits) {
    console.log(key);
    if (favFruits[key]) {
        console.log(`${key} is my FAVORITE fruit`);
    }
}

/*
    for...of
        Used to iterate array contents or any other iterable objects
*/

const fruitArray = [
    "banana",
    "apple",
    "pear",
]
for (let fruit of fruitArray) {
    console.log("Fruit:", fruit);
}

/*
    map()
        map accepts a callback function and 
        applies results of function to current
        array element
    
    function map(callbackFunction) {
        for (int i = 0; i < array.length; i++) {
            callbackFunction(array[i], i, array)
        }
    }
*/
function exciteTheFruit(fruitName) {
    return fruitName + '!';
}

const excitedFruits = fruitArray.map(exciteTheFruit);
console.log("Non-excited fruits:", excitedFruits);
console.log("EXCITED FRUITS:", excitedFruits);

/*
    DOM
        - Can be used to modify content of webpage using DOM
            - Document Object Model
            - Feature provided by browser to interact with the page
        - To use DOM, just need to type 'document' somewhere on the page
        - A representation of a website as a trie

    DOM Tree
        - Entire object is a tree with one root
            - Nested elements become children
            - Document is ultimate parent
                - root is child of document
                    - head and body and children of root
                        - ...
*/