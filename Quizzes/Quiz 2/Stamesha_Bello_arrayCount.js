const student_name = "Stamesha Bello"

function arrayCount(arr, word) {
    return arr.reduce((count, currWord) => {
        if (typeof currWord === "string" &&
            word.toLowerCase() === currWord.toLowerCase()
        ) {
            count++;
        }
        return count;
    }, 0)
}

// example 1
const arr1 = ['apple', 'banana', 'Cherry', 'ApPle', 'pear', 'orange'];
const word1 = 'apple';
const count1 = arrayCount(arr1, word1);
// example 2
const arr2 = ['book', 'Bread', 'cake', 'donut', 'Egg', 'Fruit'];
const word2 = 'Bread';
const count2 = arrayCount(arr2, word2);
// example 3
const arr3 = ['elephant', 'fox', 'giraffe', 'hippo', 'iguana'];
const word3 = 'lion';
const count3 = arrayCount(arr3, word3);
// example 4
const arr4 = [];
const word4 = '';
const count4 = arrayCount(arr4, word4);
// example 5
const arr5 = [1, true, {}, null, undefined];
const word5 = 'test';
const count5 = arrayCount(arr5, word5);

console.log("Starting tests for " + student_name);
console.assert(count1 === 2, "Result for example1 should be 2"); 
console.assert(count2 === 1, "Result for example2 should be 1"); 
console.assert(count3 === 0, "Result for example2 should be 0"); 
console.assert(count4 === 0, "Result for example4 should be 0");
console.assert(count5 === 0, "Result for example5 should be 0"); 
console.log("code execution complete - if no errors are listed above, you are good to go!")
