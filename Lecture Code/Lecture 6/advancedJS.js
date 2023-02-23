////////////////// ADVANCED JAVASCRIPT //////////////////
            
/*
    Classes and Prototypes
        Prototyping is syntactic sugar (doing something in easier way, but
            with "standard" procedures occurring behind the scenes)
*/

const newWord = "banana again";
const words = newWord.split(" ");
console.log("Words split on ' ':", words);

// Can override the functionality of Object properties,
// like String, using the "prototype" field
// String.prototype.split = "hat";
// console.log(newWord.split());

/*
    JavaScript Event Loop
        - In some languages
            - Do one thing
            - Wait for that function to finish before doing the next
            - Wait for the second step to finish before moving on
            - etc...
        
        - In JavaScript:
            - While waiting for other events to occur, will
              do other events as necessary in the background.
            - Efficient
            - JS may pause or resume certain functions running in the background
              to do other things
            - Built-in event handling
*/

let myFavNum = 100;

console.log("Hello, I'm number 1");
setTimeout(function() {
    console.log("Hello, I am number", myFavNum + '!');
}, 2000);

// While JS waiting for timeout to finish, will continue executing code below
// it. In this case, get 1 -> 3 -> 2
myFavNum = 12;
console.log("I am number 3!");

/*
    Promise
        - How we handle callbacks in a more clear way
        - Will be 
*/

/*
    Pass by Value vs by Reference
        - When using primitive in function argument, JS will COPY value
          of variable into argument
            - Any changes to that argument will NOT affect variable
              passed to it
        - When using Object in function argument, JS will pass the memory
          location of the object to the function
            - Any modifications to object in function WILL afftect
              object outside of function
*/

function modifyValue(arg) {
    arg = arg + "Won't you change?";
}

let value = "unchanging";
console.log(value);
modifyValue(value);
console.log(value);

const fruitColors = {
    apple: "green",
};
function modifyApple(fruitColors, newColor) {
    fruitColors.apple = newColor;
}

console.log(fruitColors);
modifyApple(fruitColors, "purple");
console.log(fruitColors);
