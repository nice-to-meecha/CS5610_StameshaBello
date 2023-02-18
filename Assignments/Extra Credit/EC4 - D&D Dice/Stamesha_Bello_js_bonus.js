/**
 * Name: Stamesha Bello
 * Date: 2-17-2023
 * EC4: D&D Dice (JavaScript Bonus)
 * 
 * Resources
 *  - Writing function comments for JavaScript
 *      https://javascript.info/comments
 */

const NUM_DICE_MIN = 1;
const NUM_SIDES_MIN = 2;
const NUM_DICE_SIDES_MAX = 100;

/**
 * A function which takes the number of dice and the number of sides
 * of those dice and returns the sum of all rolls performed with
 * each die.
 * 
 * @param {string} diceStr A string in the format of /[0-9]+d[0-9]+/,
 *  which represents the number of dice to be rolled and their
 *  sides, respectively
 * @returns {number} The sum of all dice 'rolled'
 */
function rollDice(diceStr) {
    const [ numDice, numSides] = diceStr.split('d');
    const [ intDice, intSides ] = validateInput(numDice, numSides);
    let sum = 0;
    for (let i = 0; i < intDice; i++) {
        sum += Math.round(Math.random() * (intSides - NUM_SIDES_MIN) + NUM_SIDES_MIN);
    }

    return sum;
}

/**
 * Validates the the number of dice and sides provided as input
 * for the rollDice() function. Checks if the number of dice and
 * sides are integers and fall within the acceptable range of values.
 * 
 * @param {string} numDice The number of dice to be rolled
 * @param {string} numSides The number of sides each die will have
 * @returns {Array} Integers representing the number of dice
 *  to be rolled and the number of sides of each die, respectively
 */
function validateInput(numDice, numSides) {
    const intDice = parseInt(numDice)
    const intSides = parseInt(numSides)
    if (isNaN(intDice)) {
        throw new Error("You must provide an integer to represent " +
        "the number of dice needed, in the format of #d#.");
    } else {
        if (intDice < NUM_DICE_MIN || intDice > NUM_DICE_SIDES_MAX) {
            throw new Error("The number of dice must be between " +
            "1 and 100, inclusive.");
        }
    }

    if (isNaN(intSides)) {
        throw new Error("You must provide an integer to represent " +
        "the number of sides of the dice, in the format of #d#.");
    } else {
        if (intSides < NUM_SIDES_MIN || intSides > NUM_DICE_SIDES_MAX) {
            throw new Error("The number of sides must be between " +
            "2 and 100, inclusive.");
        }
    }

    return [intDice, intSides];
}

function main() {
    console.log(rollDice("1d4"));
    console.log("===============================================");
    console.log(rollDice("5d3"));
    console.log("===============================================");
    console.log(rollDice("4d2"));
    console.log("===============================================");
    console.log(rollDice("20d7"));
    console.log("===============================================");
    console.log(rollDice("1d100"));
    console.log("===============================================");
    console.log(rollDice("100d2"));

    /*
        Testing illegal input

        console.log(rollDice("ad7"));
        console.log(rollDice("20d*"));
        console.log(rollDice("iefjew"));
        console.log(rollDice("0d7"));
        console.log(rollDice("101d7"));
        console.log(rollDice("1d1"));
        console.log(rollDice("1d101"));
        console.log(rollDice(""));

    */
}

main();