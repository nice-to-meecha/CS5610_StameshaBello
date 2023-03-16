/*
    JavaScript
        ECMAScript - Suite of rules JS expected to implement
        Works entirely in browser
            - Diff browsers handle JS on their own. Although rare,
              some minor differences
        Backend versions of JS exist as well (e.g. Node)
*/

/*
    Declaring a Variable
    - var: traditional/old (deprecated) way of declaring variable
        - Used for all variables
        - Scope of any var variable is difficult to capture; likely global
            - May end up overriding diff variable
        - Do NOT use var
    - let: variable you want to reassign later
    - const: (constant) variable will only assign once
        - Minor performance increase over let
*/

/*
    Types
    - boolean
    - null: empty value
    - undefined: unassigned variable
    - Number: any numerical value (ints and floats)
    - BigInt: integer with arbitrary precision (extremely large int)
    - String: representation of text/words
        - Can use single or double quotes
    - Symbol: object that is guaranteed to be unique
    - Object
*/

/*
    Dynamically Typed
    - JS is dynamically typed
    - Can change type of previously declared variable
        - e.g.
            let declaredVar = true
            declaredVar = 12
*/

/*
    Equality
    - Strict Equality (===)
        - First checks type
            - If diff types, fails
        - Then, checks content
    - Coersion (==)
        - Takes a value and changes the type, in order
          to compare values
        - Original purpose was to make inexperienced programmers
          get used to coding
*/

if (1 == '1') {
    console.log("Coersion has occurred");
} else {
    console.log("Coersion failed");
}

if (1 === '1') {
    console.log("Strict equality failed");
} else {
    console.log("Strict equality has worked");
}

/*
    Object
    - key-value storage (like hash map)
    - Can assign values by using dot notation or indexing(?)
    - If try to access non-existent key, will return undefined
*/

const movieRanking = {
    "The Whale": 5.0,
    "Everything, Everywhere All at Once": 10,
    RRR: 10,
};

console.log(movieRanking.RRR);
movieRanking["Star Wars"] = 7;
movieRanking.Ghostbusters = 6;
console.log(movieRanking.banana);

/*
    Arrays
    - Diff type of object
    - Used to hold collection of items
*/
const dvdList = [
    "Star Wars",
    7,
];

dvdList.push("Pinocchio");
// Removed last element in array
const lastAddedMovie = dvdList.pop();

// Can use shift/unshift to remove/add elements
// at front of array


/*
    Hoisting
    - When run code, will scan entire document. With traditionally
      declared functions, will move function declaration to top of file
    - When declare function like variable, will treat like variable and
      NOT move declaration above
*/
hooray("hoisting"); // CAN call hooray() before declaration, due to hoisting

function hooray(name) {
    console.log(`Hooray, ${name}!`);
}

// woohoo(); -- Will NOT work; not hoisted
const woohoo = function() {
    console.log("woohoo");
}

woohoo();

function celebrationFunc(wordFunc, partierName) {
    wordFunc(partierName);
}

celebrationFunc(hooray, "me");

/*
    Truthy/Falsy
    - Use terms truthy/falsy, since true and false are keywords
    - Refer to expressions/values that evaluate to true or false, respectively
    - falsy values:
        - false
        - 0
        - null
        - undefined
        - NaN
        - '' (empty string)
*/

/*
    Iterations/Loops
    - for...in -- Objects only
    - for...of -- Array
*/


////// ADVANCED JAVASCRIPT //////

/*
    Syntactic Sugar: Ternary Operators
    - if statement with fewer lines
*/

const iWantAnEvenNumber = true;
let number;
if (iWantAnEvenNumber) {
    number = 10;
} else {
    number = 5;
}

const newNumber = iWantAnEvenNumber ? 10 : 5;

/*
    Array Spread
    - Will iterate over items and add them to the array
*/

const vhsMovies = [
    "Star Wars",
    "James Bond",
]

const dvdMovies = [
    "Avengers",
    "Another Star Wars Movie",
]

// If you want to combine vhsMovies and dvdMovies,
// can use spread notation to, in a sense, copy values
// of array/object
const comboMovies = [
    ...vhsMovies,
    ...dvdMovies
]

console.log(comboMovies);


/*
    Syntactic Sugar: Array/Object Destructuring
    - Array: Getting values from array, according to their order,
      without having to use indexing
    - Object: Getting values according to key name
        - If have nested object, any changes to nested object
          will STILL be seen. Only copies at first level.
          Need to use diff method for nested objects like
          JSON.stringify(JSON.parse()) or iterate over object
*/

const [firstMovie, secondMovie] = dvdMovies;
const fruitColor = {
    banana: "yellow",
    apple: "red",
    testing: {
        a: 1
    }
};

const { banana } = fruitColor;

const foodColor = {
    ...fruitColor
}

fruitColor.testing.b = 2;
console.log(foodColor);

/*
    Pass by Reference
    - Pass in memory location of objects, instead of value
        - Anywhere it is used, changes will be visible throughout code
*/

/*
    Syntactic Sugar: Object Shorthand
    - If have variables, can use them, as is, within object definition
        - Meaning, the variable name will serve as the key, and the 
          variable definition will be the value
        - This is meant to make object definitions a little easier,
          hence why it is referred to as syntactic sugar

    const goToFood = "rice bowl"
    const goToSnack = "goldfish"
    const goTos = { goToFood, goToSnack } // { goToFood: "rice bowl", goToSnack: "goldfish" }
*/

/*
    Arrow Function
    - Instead of using function keyword, can use '=>' instead
        const exFunc = (exArg) => {
            return exArg + '!';
        }

    - Implied return statement
        - If do not have curly braces after arrow, then will
          return the expression/value immediately after the arrow
*/      const exFunc = (exArg) => exArg + '!';

const sadFunc = () => "I am sad";

console.log(sadFunc());

const numList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

function isGreaterThan5(num) {
    return num > 5;
}

const outputList = numList.filter(num => num > 5);
console.log(outputList);
