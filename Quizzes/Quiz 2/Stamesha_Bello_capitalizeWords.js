/*
    Name: Stamesha Bello
    Date: 3/18/2023
    
    Write a JavaScript function 'capitalizeWords' that will capitalize
    the first letter of each word(5pts) and also remove all special,
    non-alphanumeric characters( : ; , .) (5pts) in the given text below.

    lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor: incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis.  suscipit laboriosam, nisi ut  aliquid ex ea commodi  consequatur. Quis aute iure reprehenderit in voluptate; velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non.  proident, sunt in culpa qui officia; deserunt mollit anim id est laborum.

    For example: Lorem Ipsum Dolor Sit Amet Consectetur...
    You can take the text as an input parameter to the capitalizeWords function and based on delimeters get each words.
*/

function capitalizeWords(text) {
    let capitalizedText = ''
    capitalizedText = text.replaceAll(/[^A-Za-z\s]/g, '');
    capitalizedText = capitalizedText.split(' ').map(word => `${(word[0] || '').toUpperCase()}${(word.slice(1) || "")}`)
    return capitalizedText.join(' ');
}

console.log(
    capitalizeWords("lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor: incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis.  suscipit laboriosam, nisi ut  aliquid ex ea commodi  consequatur. Quis aute iure reprehenderit in voluptate; velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non.  proident, sunt in culpa qui officia; deserunt mollit anim id est laborum.")
);