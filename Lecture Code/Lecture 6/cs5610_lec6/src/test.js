let word = "banana";

function printWord() {
    console.log(word);
}

word = "small hat";
printWord();

// Will print "small hat", NOT "green", since previously defined and called
// React works in the same way
word = "green"