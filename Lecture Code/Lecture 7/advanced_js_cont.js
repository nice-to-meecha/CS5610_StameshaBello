/*
    Event Loop

    - When introducing functions that cause delay for
      JS to render, statements will no longer run in order
    - While the thread is waiting on one function, will continue
      executing further statements (potentially in another thread),
      until finished
*/

let fruit = "banana";

console.log("Hello 1", fruit);

setTimeout(function() {
    fruit = "apple"
    console.log("Hello from inside the timeout", fruit);
}, 500);

// Fruit will still be 'banana', NOT 'apple' in this statement,
// because fruit will not be redefined, until the timeout above
// finishes.
console.log("Hello again 2", fruit);


/*
    Promise

    - Way of nesting behavior in an attempt to make it more logical..?
    - Way of managing asynchronous behavior
    - fetch()
        - Makes API request and returns response

*/

fetch("https://catfact.ninja/fact").then(function(response) {
    // console.log(response);
    console.log("Got response from catfact!");
});


/*
    Passing by Value vs Reference
        - When pass in primitive value, will make copy of value
          to be used within the function
            - Any changes to variable in function will NOT affect
              variable used outside of function

        - When pass in object, will pass in memory location of
          object
            - Any changes to variable in function WILL change
              object used outside of function, since 
*/

// Pass by Value
let banana = "banana";
console.log("Before modification:", banana);

function modifyBanana(fruit) {
    fruit += '!';
    return fruit;
}

console.log(modifyBanana(banana));
console.log(banana);

let bananaFacts = {
    weight: "500g",
    color: "yellow",
    legnth: "20cm",
};

console.log(bananaFacts);

function modifyBananaFacts(bananaFacts) {
    bananaFacts.lastUpdated = new Date();
    return bananaFacts;
}

console.log(modifyBananaFacts(bananaFacts));

console.log(bananaFacts);


/*
    Syntactic Sugar
        - Multiple ways to do the same thing; several concepts that
          developers recognized were used a lot. Code written to
          make those things easier
*/

/*
    Syntactic Sugar: Ternary Operator
        - Simplifies "if" statements
*/

let favFruit;
let personName = "Stamesha";

// if (personName === "Tao") {
//     favFruit = "banana";
// } else {
//     favFruit = "apple";
// }

favFruit = (personName === "Tao") ? "banana" : "apple";
console.log(favFruit);

/*
    Syntactic Sugar: Array/Object Spread
        - When spread object or array, use ellipses to make a
          "quick copy" (not necessarily a copy though)
        - Goof way to clone (maybe not) or combine multiple
          arrays/objects w/out iterating over them
*/
const ambikaFavorites = ["Marvel Movies", "Spy Movies"];
const yeshengFavorites = ["Romance Movies", "Action Movies"];

// const studentFavMovies = [];
// for (let i = 0, movieLength = ambikaFavorites.length; i < movieLength; i++) {
//     const movie = ambikaFavorites[i];
//     studentFavMovies.push(movie);
// }

const studentFavMovies = [...ambikaFavorites, ...yeshengFavorites];

console.log(studentFavMovies);


/*
    Syntactic Sugar: Destructuring
        - Reverse of array/object spread
        - Quickly pull values out of array/object, by reassigning
          them to new variables
        - Can use ellipses to grab remaining values, similar
          to spread operator
*/

const { weight, color: bananaColor, ...rest } = bananaFacts;
console.log(weight, bananaColor, rest);


/*
    Syntactic Sugar: Object Shorthand
        - Opposite of destructuring
        - Instead of pulling values from object, want to set values
          to object
*/

const color  = "green";
const bananaWeight = "700g";
const newBananaFacts = {
    bananaWeight,
    color,
};
// bananaFacts.weight = weight;
// bananaFacts.color = color;
console.log(newBananaFacts);


/*
    Syntactic Sugar: Arrow Functions
        - Similar to lambdas in other languages
        - Compact way to write function declaration
        - Only suited for extremely simple methods, due to
          readability
*/
const modifyBananaArrow = fruit => fruit + '!'

console.log(modifyBananaArrow("banana"));


/*
    Advanced Array Functions
        - ASIDE from "push", "pop", "shift", "unshift", etc
        - Can use functional programming to alter arrays
            - e.g. map
        - Take a callback function as argument and apply it
          to each element in the array
*/

// const excitedMovieList = [];
// for (let i = 0, movieLength = ambikaFavorites.length; i < movieLength; i++) {
//     const movie = ambikaFavorites[i];
//     excitedMovieList.push(movie + '!');
// }

const excitedMovieList = ambikaFavorites.map(movieName => movieName + '!');
console.log(excitedMovieList);


