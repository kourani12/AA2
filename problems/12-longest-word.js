/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {
    // Split sentence into words
    let words = sentence.split(' ');
    
    // Variables to keep track of the longest word and its length
    let longestWord = '';
    let maxLength = 0;
    
    // Iterate through each word using forEach
    words.forEach(function(word) {
        // Check if current word is longer than the current longest word
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWord = word;
        }
    });
    
    // Return the longest word found
    return longestWord;
};

// Examples
console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
